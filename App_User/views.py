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
from .models import User

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
# Create your views here.


class ContactQueriesView(APIView):
    def post(self, request):
        try:
            data = json.loads(request.body.decode("utf-8"))
            serializer = ContactQueriesSerializer(data=data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(data={"details": "Successfully registered"},status=status.HTTP_200_OK)
        except Exception as e:
            return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)

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