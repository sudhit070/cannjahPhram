from rest_framework import serializers
from medical.models import MedicalRegister


class MedicalRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalRegister
        fields = "__all__"