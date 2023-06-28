from django.urls import path
from medical.views import MedicalRegisterView, MedicalRegisterDetailView, verify_email

urlpatterns = [
    path('verify_email', verify_email, name="verify_email"),
    path('medical_register', MedicalRegisterView.as_view(), name="medical_register"),
    path('medical_register/<pk>', MedicalRegisterDetailView.as_view(), name="medical_register_detail")
]