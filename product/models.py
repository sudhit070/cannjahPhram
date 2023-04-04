from django.db import models
from common.constants import PRODUCT_STATE

# Create your models here.
class ProductCategory(models.Model):
    id = models.AutoField(primary_key=True)
    category_title = models.CharField(max_length=200, null=True, blank=True)

class ProductImage(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='media/products')

class AvailableLabel(models.Model):
    id = models.AutoField(primary_key=True)
    tag_title = models.CharField(max_length=500, null=True, blank=True)

class PlantScienceTag(models.Model):
    id = models.AutoField(primary_key=True)
    tag_title = models.CharField(max_length=500, null=True, blank=True)
    tag_value = models.CharField(max_length=500, null=True, blank=True)

class DemandTag(models.Model):
    id = models.AutoField(primary_key=True)
    tag_title = models.CharField(max_length=500, null=True, blank=True)

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    sub_title = models.CharField(max_length=1000, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    type = models.CharField(max_length=1000, null=True, blank=True)
    cannabinoids = models.CharField(max_length=1000, null=True, blank=True)
    aroma = models.CharField(max_length=1000, null=True, blank=True)
    terpenes = models.CharField(max_length=1000, null=True, blank=True)
    origin = models.CharField(max_length=500, null=True, blank=True)
    product_category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE, null=True, blank=True)
    product_main_image = models.ForeignKey(ProductImage, on_delete=models.CASCADE, null=True, blank=True)
    product_more_image = models.ManyToManyField(ProductImage, related_name="product_more_image")

    #available in tags for reference
    available_in_tags = models.ManyToManyField(AvailableLabel)

    #top_tags
    top_trending_tags = models.ManyToManyField(DemandTag)

    #plant_science
    plant_science_description = models.TextField()
    plant_science_tags = models.ManyToManyField(PlantScienceTag)