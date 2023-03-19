import json
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ContactQueriesSerializer

# Create your views here.


class ContactQueriesView(APIView):
    def post(self, request):
        queryDict = list(request.data.keys())
        queryDict = json.loads(queryDict[0])
        serializer = ContactQueriesSerializer(data=queryDict)

        if not serializer.is_valid():
            return Response(
                {
                    "status": 403,
                    "action": "contact-queries",
                    "data": serializer.errors,
                    "message": "Contact Form Fields are not Valid!",
                }
            )

        serializer.save()

        return Response(
            data="Hello",
            status=None,
            template_name=None,
            headers=None,
            content_type=None,
        )

        # return Response(
        #     {
        #         "status": 200,
        #         "action": "contact-queries",
        #         "message": "Your Message Successfully Registered! We Contact You As Soon as Possible!",
        #     }
        # )
