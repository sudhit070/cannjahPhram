from django.urls import path
from medical.views import MedicalRegister

urlpatterns = [
    path('verify_email', MedicalRegister.as_view(), name="verify_email"),
    path('medical_register', MedicalRegister.as_view(), name="medical_register"),
]