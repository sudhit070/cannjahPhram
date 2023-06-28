import json
from rest_framework.views import APIView
from medical.serializer import MedicalRegisterSerializer
from rest_framework.serializers import ValidationError
from rest_framework.response import Response
from rest_framework import status
from medical.models import MedicalRegister
from rest_framework.permissions import IsAuthenticated
from datetime import datetime
# Create your views here.


def verify_email(request):
    try:
        email = request.GET.get('email')
        if MedicalRegister.objects.filter(email=email).first():
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"details": "Email already Registered!", "accepted": False})
        else:
            return Response(status=status.HTTP_200_OK, data={"details": "No Email Found", "accepted": True})
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST, data={"detals": str(e), "accepted": False})

class MedicalRegisterView(APIView):
    model = MedicalRegister
    serializer_class = MedicalRegisterSerializer
    
    def get(self, request):
        try:
            resp_data = {"details": "No Details", "status": 0}
            action = request.GET.get("action")
            if action == "all":
                data = self.model.objects.filter(approved=False).order_by("-id")
            elif action == "approved":
                data = self.model.objects.filter(approved=True).order_by("-id")

            if data:
                serializer = self.serializer_class(data, many=True)
                resp_data["details"] = "Data Found"
                resp_data["status"] = 1
                resp_data["result"] = serializer.data
                return Response(data=resp_data, status=status.HTTP_200_OK)
            return Response(data=resp_data, status=status.HTTP_400_BAD_REQUEST)
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

class MedicalRegisterDetailView(APIView):
    model = MedicalRegister
    serializer_class = MedicalRegisterSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            medical_reg = self.model.objects.get(id=pk)
            return medical_reg
        except self.model.DoesNotExist:
            return None

    def get(self, request, pk):
        reg = self.get_object(pk)
        if reg:
            serializer = self.serializer_class(reg)
            return Response(status=status.HTTP_200_OK, data={"data": serializer.data, "details": "Registration data fetched"})
        else:
            return Response(status=status.HTTP_404_NOT_FOUND, data={"details": "Oops! No such registration detail found"})

    def post(self, request, pk):
        reg = self.get_object(pk=pk)
        if reg:
            reg.approved = True
            reg.approved_date = datetime.now()
            reg.save()
            return Response(data={"details": "Registration Successfull", "status": 1}, status=status.HTTP_200_OK)
        return Response(data={"details": "Registration not found or Something Went Wrong", "status": 0}, status=status.HTTP_400_BAD_REQUEST)