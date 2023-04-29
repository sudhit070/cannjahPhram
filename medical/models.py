from django.db import models
from App_User.models import BaseModel
from medical.constants import gender_choices
from medical.enums import GenderConstants

# Create your models here.
class MedicalRegister(BaseModel):
    #section A Bsic info
    email = models.EmailField(null=True, blank=True)
    name = models.CharField(max_length=500, null=True, blank=True)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=20, choices=gender_choices, default=GenderConstants.MALE.value)

    #section B Address
    residence_address1 = models.TextField(null=True, blank=True)
    residence_address2 = models.TextField(null=True, blank=True)
    residence_city = models.CharField(null=True, blank=True, max_length=200)
    residence_province = models.CharField(null=True, blank=True, max_length=200)
    residence_postal_code = models.CharField(null=True, blank=True, max_length=50)
    mobile_number = models.CharField(max_length=15, null=True, blank=True)
    fax = models.CharField(max_length=50, null=True, blank=True)

    mailing_address1 = models.TextField(null=True, blank=True)
    mailing_address2 = models.TextField(null=True, blank=True)
    mailing_city = models.CharField(null=True, blank=True, max_length=200)
    mailing_province = models.CharField(null=True, blank=True, max_length=200)
    mailing_postal_code = models.CharField(null=True, blank=True, max_length=50)

    shipping_address1 = models.TextField(null=True, blank=True)
    shipping_address2 = models.TextField(null=True, blank=True)
    shipping_city = models.CharField(null=True, blank=True, max_length=200)
    shipping_province = models.CharField(null=True, blank=True, max_length=200)
    shipping_postal_code = models.CharField(null=True, blank=True, max_length=50)

    #section C resposnible for the applicant (optional)
    resposible_name = models.CharField(max_length=500, null=True, blank=True)
    responsible_date_of_birth = models.DateField(null=True, blank=True)
    responsible_gender = models.CharField(max_length=20, choices=gender_choices, null=True, blank=True)

    #section D Health care practitioner info (optional)
    practitioner_name = models.CharField(max_length=500, null=True, blank=True)
    clinic_name = models.CharField(null=True, blank=True, max_length=500)
    practitioner_address1 = models.TextField(null=True, blank=True)
    practitioner_address2 = models.TextField(null=True, blank=True)
    practitioner_city = models.CharField(null=True, blank=True, max_length=200)
    practitioner_province = models.CharField(null=True, blank=True, max_length=200)
    practitioner_postal_code = models.CharField(null=True, blank=True, max_length=50)
    practitioner_mobile_number = models.CharField(max_length=15, null=True, blank=True)
    practitioner_fax = models.CharField(max_length=50, null=True, blank=True)
    practitioner_email = models.EmailField(null=True, blank=True)

    #section E Terms & conditions
    accepted = models.BooleanField(default=False)

    #section F - reviewer's section
    reviewer_name = models.CharField(max_length=200, null=True, blank=True)
    approved = models.BooleanField(default=False)
    approved_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.email