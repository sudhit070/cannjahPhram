from django.urls import path
from . import views


urlpatterns = [
    path('product/', views.ProductList.as_view(), name="productlist"),
    path('product/<int:pk>', views.ProductDetail.as_view(), name="productdetail"),
]