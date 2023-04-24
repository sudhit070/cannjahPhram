import json
from rest_framework.views import APIView
from medical.serializer import EmailValidation, MedicalRegisterSerializer
from rest_framework.serializers import ValidationError
from rest_framework.response import Response
from rest_framework import status
from medical.models import MedicalRegister
# Create your views here.

class MedicalRegister(APIView):
    def get(self, request):
        try:
            data = json.loads(request.body.decode('utf-8'))
            serializer = EmailValidation(data=data)
            serializer.is_valid(raise_exception=True)
            serialized_data = serializer.validated_data
            email = serialized_data["email"]
            if MedicalRegister.objects.filter(email=email).first():
                return Response(status=status.HTTP_400_BAD_REQUEST, data={"details": "Email already Registered!", "accepted": False})
            else:
                return Response(status=status.HTTP_200_OK, data={"details": "No Email Found", "accepted": True})
        except ValidationError as e:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"detals": str(e), "accepted": False})
        
    def post(self, request):
        try:
            data = json.loads(request.body.decode('utf-8'))
            serializer = MedicalRegisterSerializer(data=data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(status=status.HTTP_200_OK, data={"details": "Registered Successfull, Please check you're email for furthur process"})
        except ValidationError as e:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"detals": str(e)})