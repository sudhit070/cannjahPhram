import json
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import ContactQueriesSerializer, VisistorLogsSerializer, UserSerializer, MyTokenObtainPairSerializer
from user_agents import parse
import time
from common.common_methods import generateVisitorToken
from django.views.decorators.http import require_http_methods
from rest_framework.decorators import api_view
from rest_framework import generics
from .models import User, ContactQueries

from rest_framework_simplejwt.views import TokenObtainPairView

from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes

from django.contrib.auth.tokens import default_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.urls import reverse

from datetime import timedelta

from datetime import datetime
# Create your views here.


class ContactQueriesView(APIView):
    model = ContactQueries
    serializer_class = ContactQueriesSerializer

    def post(self, request):
        try:
            data = json.loads(request.body.decode("utf-8"))
            serializer = ContactQueriesSerializer(data=data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(data={"details": "Successfully registered"},status=status.HTTP_200_OK)
        except Exception as e:
            return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        action = request.GET.get("action")
        request_data = request.data
        resp_dict = {"details": "No Data Found", "status": 0}

        if action == "all":
            data = self.model.objects.all().order_by("-id")
        elif action == "unread":
            data = self.model.objects.filter(read=False).order_by("-id")
        elif action == "read":
            data = self.model.objects.filter(read=True).order_by("-id")
        elif action == "filter":
            start_date = request_data.get("start_date", "")
            end_date = request_data.get("end_date", "")

            if not start_date or end_date:
                return Response(data=resp_dict, status=status.HTTP_400_BAD_REQUEST)

            start_date = datetime.strptime(start_date, "%Y-%m-%d").date()
            end_date = datetime.strptime(end_date, "%Y-%m-%d").date()
            data = self.model.objects.filter(create_on__range=[start_date, end_date]).order_by("-id")
        elif action == "particular":
            email = request_data.get("email", "")

            if not email:
                return Response(data=resp_dict, status=status.HTTP_400_BAD_REQUEST)
            data = self.model.objects.filter(email=email).order_by("-id")

        if data:
            serializer = self.serializer_class(data, many=True)
            resp_dict["details"] = "Data Found"
            resp_dict["status"] = 1
            resp_dict["result"] = serializer.data
            return Response(data=resp_dict, status=status.HTTP_200_OK)
        
        return Response(data=resp_dict, status=status.HTTP_400_BAD_REQUEST)

class ContactQueryDetailView(APIView):
    model = ContactQueries
    serializer_class = ContactQueriesSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            contact_query = self.model.objects.get(id=pk)
            return contact_query
        except self.model.DoesNotExist:
            return None

    def get(self, request, pk):
        contact_query = self.get_object(pk)
        if contact_query:
            serializer = self.serializer_class(contact_query)
            return Response(status=status.HTTP_200_OK, data={"data": serializer.data, "details": "Query Found"})
        else:
            return Response(status=status.HTTP_404_NOT_FOUND, data={"details": "Oops! No such Query Found"})
    
    def post(self, request, pk):
        contact_query = self.get_object(pk=pk)
        if contact_query:
            contact_query.read = True
            contact_query.save()
            return Response(data={"details": "Contact Query Marked as Read"}, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND, data={"details": "Oops! No such Query Found"})

@api_view(["GET"])
@require_http_methods(["GET"])
def verify_age(request):
    try:
        meta = request.META
        ip = meta.get('HTTP_X_FORWARDED_FOR') or meta.get('REMOTE_ADDR')
        request_browser = meta.get('HTTP_USER_AGENT')
        user_agent = str(parse(request_browser))
        visited_time = int(time.time())
        age = request.GET.get('age', 19)
        uid = generateVisitorToken(f"{visited_time}:{ip}:{age}")
        data_dict = {
            "ip": ip,
            "age": age,
            "uuid": uid,
            "request_browser": user_agent
        }
        serializer = VisistorLogsSerializer(data=data_dict)
        serializer.is_valid(raise_exception=True)
        serializer = serializer.save()
        return Response(data={"token": serializer.uuid, "ttl": timedelta(days=15)}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)

class RegisterUser(generics.GenericAPIView):
    serializer_class = UserSerializer
    model = User
    
    def post(self, request, *args, **kwargs):
        try:
            data = json.loads(request.body.decode('utf-8'))
            # data = request.data
            serializer = self.serializer_class(data=data)
            serializer.is_valid(raise_exception=True)
            validated_data = serializer.validated_data
            del data['email']
            email = validated_data['email']
            try:
                password = validated_data['password']
                del data['password']
            except:
                password = None
            
            user_type = data['type_of_user']
            if user_type == 'admin':
                User.objects.create_superuser(email, password, **data)
            else:
                User.objects.create_user(email, password, **data)
            return Response(data={"details": "Successfully registered"},status=status.HTTP_200_OK)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"details": str(e)})

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def password_change(request):
    try:
        data = request.data
        user = request.user

        current_password = data['current_password']
        new_password = data['new_password']
        
        if not user.check_password(current_password):
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"details": "Wrong Password!"})

        user.set_password(new_password)
        user.save()
        return Response(status=status.HTTP_200_OK, data={"details": "Password Changed Successfully"})     

    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST, data={"details": str(e)})

class ForgetPasswordView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            data = request.data
            email = data.get('email', None)
            if not email:
                return Response(status=status.HTTP_400_BAD_REQUEST, data={"details": "Please Enter a valid email address"})
            try:
                user = User.objects.get(email=email)
            except:
                user = None

            if not user:
                return Response(status=status.HTTP_400_BAD_REQUEST, data={"details": "The Email address is Invalid"})

            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.email))
            password_reset_url = f"/{uid}/{token}"
            print(password_reset_url)
            reset_url = f"{password_reset_url}"
            subject = "Cannjah - Reset Password"
            # message = render_to_string('password_reset_email.html', {
            #     'user': user,
            #     'reset_url': reset_url,
            # })

            # send_mail(subject, 'cannjah@gmail.com', [email])
            return Response(status=status.HTTP_200_OK, data={"details": "Password Reset Email have been sent successfully"})
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"details": str(e)})

class ResetPasswordView(APIView):
    def post(self, request, uid, token):
        try:
            email = urlsafe_base64_decode(uid).decode('utf-8')
            if not email:
                return Response(status=status.HTTP_401_UNAUTHORIZED, data={"details": "Invalid/Unauthorized Request"})
            
            try:
                user = User.objects.get(email=email)
            except:
                user = None

            if not user:
                return Response(status=status.HTTP_401_UNAUTHORIZED, data={"details": "Invalid/Unauthorized Request"})

            if not default_token_generator.check_token(user, token):
                return Response(status=status.HTTP_401_UNAUTHORIZED, data={"details": "Invalid/Unauthorized Request"})

            data = request.data
            new_password = data.get("new_password")
            confirm_password = data.get("confirm_password")
            if new_password != confirm_password:
                return Response(status=status.HTTP_400_BAD_REQUEST, data={"details": "Password Mismatch"})

            user.set_password(new_password)
            user.save()
            return Response(status=status.HTTP_200_OK, data={"details": "Password reset successfully"})
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"details": str(e)})