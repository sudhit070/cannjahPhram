from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['title', 'sub_title', 'description', 'type', 'cannabinoids', 'aroma', 'terpenes', 'origin', 'product_category', 'product_main_image', 'product_more_image', 'available_in_tags', 'top_trending_tags', 'plant_science_description', 'plant_science_tags']