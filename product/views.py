from rest_framework.views import APIView
from .serializers import ProductSerializer
from .models import Product
from rest_framework import status
from django.http import JsonResponse
from rest_framework.serializers import ValidationError
import json
from django.http import Http404
# Create your views here.

class ProductList(APIView):
    serializer_class = ProductSerializer
    model = Product

    def get(self, request, *args, **wargs):
        products = self.model.objects.all()
        serializer = self.serializer_class(products, many=True)
        return JsonResponse(status=status.HTTP_200_OK, data=serializer.data)

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body.decode('utf-8'))
        serializer = self.serializer_class(data=data)
        try:
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return JsonResponse(status=status.HTTP_201_CREATED, data={"details": "Product Created Successfully", "data": serializer.data})
        except ValidationError as e:
            return JsonResponse(status=status.HTTP_400_BAD_REQUEST, data={"details": serializer.errors})

class ProductDetail(APIView):
    serializer_class = ProductSerializer
    model = Product

    def get_object(self, pk):
        try:
            product = self.model.objects.get(id=pk)
            return product
        except self.model.DoesNotExist:
            return None

    def get(self, request, pk):
        product = self.get_object(pk)
        if product:
            serializer = self.serializer_class(product)
            return JsonResponse(status=status.HTTP_200_OK, data={"data": serializer.data, "details": "Product Found"})
        else:
            return JsonResponse(status=status.HTTP_404_NOT_FOUND, data={"details": "Oops! No such Product Found"})

    def put(self, request, pk):
        product = self.get_object(pk)
        if product:
            data = json.loads(request.body.decode("utf-8"))
            serializer = self.serializer_class(product, data=data)
            try:
                serializer.is_valid(raise_exception=True)
                serializer.save()
                return JsonResponse(status=status.HTTP_202_ACCEPTED, data={"details": "Product Updated Succesfully", "data": serializer.data})
            except ValidationError as e:
                return JsonResponse(status=status.HTTP_400_BAD_REQUEST, data={"details": serializer.errors})
        else:
            return JsonResponse(status=status.HTTP_404_NOT_FOUND, data={"details": "Oops! No such Product Found"})

    def delete(self, request, pk):
        product = self.get_object(pk)
        if product:
            product.delete()
            return JsonResponse(status=status.HTTP_202_ACCEPTED, data={"details": "product deleted successfully"})
        else:
            return JsonResponse(status=status.HTTP_404_NOT_FOUND, data={"details": "Oops! No such Product Found"})