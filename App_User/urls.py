from rest_framework import routers
from . import views
from django.urls import path, include


urlpatterns = [
    path('', include('rest_framework.urls', namespace='rest_framework')),

    path('contact', views.ContactQueriesView.as_view(), name="contactQueries"),
]
