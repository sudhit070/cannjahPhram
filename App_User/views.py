import json
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import ContactQueriesSerializer

# Create your views here.


class ContactQueriesView(APIView):
    def post(self, request):
        try:
            print("******************* request.body ------ ", request.body)
            data = json.loads(request.body.decode("utf-8"))
            print("******************* data ------ ", data)
            serializer = ContactQueriesSerializer(data=data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(data={"details": "Successfully registered"},status=status.HTTP_200_OK)
        except Exception as e:
            return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)
