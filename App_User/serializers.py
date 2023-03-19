from .models import ContactQueries
from rest_framework import serializers


class ContactQueriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactQueries
        fields = ['email', 'related', 'subject', 'message']