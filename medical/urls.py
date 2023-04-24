from django.urls import path
from medical.views import MedicalRegisterView

urlpatterns = [
    path('verify_email', MedicalRegisterView.as_view(), name="verify_email"),
    path('medical_register', MedicalRegisterView.as_view(), name="medical_register"),
]