from django.db import models

# Create your models here.


class ContactQueries(models.Model):
    email = models.EmailField(null=False, blank=False)
    related = models.CharField(max_length=100, null=False, blank=False)
    subject = models.CharField(max_length=200, null=False, blank=False)
    message = models.TextField(null=False, blank=False)

    def __str__(self):
        return str(self.email)
