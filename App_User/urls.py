from rest_framework import routers
from . import views
from django.urls import path, include
from rest_framework_simplejwt.views import TokenBlacklistView

urlpatterns = [
    path('', include('rest_framework.urls', namespace='rest_framework')),
    path('login', views.MyTokenObtainPairView.as_view()), 
    path('contact', views.ContactQueriesView.as_view(), name="contactQueries"),
    path('verify_age', views.verify_age, name="verify_age"),
    path('register', views.RegisterUser.as_view(), name='register_user'),
    path('password_change', views.password_change),
    path('forget-password', views.ForgetPasswordView.as_view(), name="password-reset-confirm"),
    path('reste-passwrod/<uid>/<token>', views.ResetPasswordView.as_view()),
    path('logout', TokenBlacklistView.as_view(), name='token_blacklist'),
]
