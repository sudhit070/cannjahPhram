from .models import ContactQueries, VisistorLogs
from rest_framework import serializers


class ContactQueriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactQueries
        fields = ['email', 'name', 'related', 'subject', 'message']

class VisistorLogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisistorLogs
        fields = ["ip", "age", "uuid", "request_browser"]