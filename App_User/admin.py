from django.contrib import admin
from .models import *



# Register your models here.
@admin.register(ContactQueries)
class ContactQueriesTable(admin.ModelAdmin):
    list_display = ['id', 'email', 'create_on', 'name','related', 'subject', 'message']

@admin.register(VisistorLogs)
class VisitorLogsTablle(admin.ModelAdmin):
    list_display = ['id', 'ip', 'request_browser', 'create_time', 'uuid']