from django.db import models

# Create your models here.

class BaseModel(models.Model):
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now=True)

class ContactQueries(models.Model):
    email = models.EmailField(null=False, blank=False)
    name = models.CharField(max_length=100, null=False, blank=False, default='')
    related = models.CharField(max_length=100, null=False, blank=False)
    subject = models.CharField(max_length=200, null=False, blank=False)
    message = models.TextField(null=False, blank=False)
    create_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.email)

class VisistorLogs(BaseModel):
    ip = models.GenericIPAddressField()
    age = models.IntegerField()
    uuid = models.UUIDField()
    request_browser = models.CharField(max_length=1000)

    def __str__(self):
        return str(self.ip)