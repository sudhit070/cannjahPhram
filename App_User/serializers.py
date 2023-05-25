from .models import ContactQueries, VisistorLogs, User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class ContactQueriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactQueries
        fields = ['email', 'name', 'related', 'subject', 'message']

class VisistorLogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisistorLogs
        fields = ["ip", "age", "uuid", "request_browser"]

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['email'] = user.email
        return token

class UserSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(required=False)