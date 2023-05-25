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
        age = request.GET.get('age')
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
        return Response(data={"token": serializer.uuid, "ttl": 3600*24*15}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)

class RegisterUser(generics.GenericAPIView):
    serializer_class = UserSerializer
    model = User
    
    def post(self, request, *args, **kwargs):
        try:
            data = request.data
            del data['email']
            serializer = self.serializer_class(data=data)
            serializer.is_valid(raise_exception=True)
            validated_data = serializer.validated_data
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