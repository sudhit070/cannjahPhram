import json
from rest_framework.views import APIView
from medical.serializer import MedicalRegisterSerializer
from rest_framework.serializers import ValidationError
from rest_framework.response import Response
from rest_framework import status
from medical.models import MedicalRegister
# Create your views here.


class MedicalRegisterView(APIView):
    def get(self, request):
        try:
            email = request.GET.get('email')
            if MedicalRegister.objects.filter(email=email).first():
                return Response(status=status.HTTP_400_BAD_REQUEST, data={"details": "Email already Registered!", "accepted": False})
            else:
                return Response(status=status.HTTP_200_OK, data={"details": "No Email Found", "accepted": True})
        except ValidationError as e:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"detals": str(e), "accepted": False})
        
    def post(self, request):
        try:
            data = json.loads(request.body.decode('utf-8'))
            serializer = MedicalRegisterSerializer(data=data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(status=status.HTTP_200_OK, data={"details": "Registered Successfull, Please check you're email for furthur process"})
        except ValidationError as e:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"details": str(e)})
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"details": str(e)})