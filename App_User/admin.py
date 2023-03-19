from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(ContactQueries)
class ContactQueriesTable(admin.ModelAdmin):
    list_display = ['id', 'email', 'related', 'subject', 'message']
