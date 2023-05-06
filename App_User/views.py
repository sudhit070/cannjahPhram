import json
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import ContactQueriesSerializer, VisistorLogsSerializer
from user_agents import parse
import time
from common.common_methods import generateVisitorToken
from django.views.decorators.http import require_http_methods
from rest_framework.decorators import api_view
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
            print("----------------- SuccessFully ------------------")
            return Response(data={"details": "Successfully registered"},status=status.HTTP_200_OK)
        except Exception as e:
            print("----------------- Failed ------------------")
            return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
@require_http_methods(["GET"])
def verify_age(request):
    try:
        meta = request.META
        ip = meta.get('HTTP_X_FORWARDED_FOR') or meta.get('REMOTE_ADDR')
        request_browser = meta.get('HTTP_USER_AGENT')
        user_agent = str(parse(request_browser))
        visited_time = int(time.time())
        age = request.GET.get('age')
        uid = generateVisitorToken(f"{visited_time}:{ip}:{age}")
        data_dict = {
            "ip": ip,
            "age": age,
            "uuid": uid,
            "request_browser": user_agent
        }
        serializer = VisistorLogsSerializer(data=data_dict)
        serializer.is_valid(raise_exception=True)
        serializer = serializer.save()
        return Response(data={"token": serializer.uuid, "ttl": 3600*24*15}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)