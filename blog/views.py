from django.shortcuts import render
from .models import BlogCategory
from django.http import JsonResponse
# Create your views here.
def category(request):
    category_ids={}
    for category in BlogCategory.objects.all():
        category_ids.update({category.id:category.name})
    return JsonResponse(category_ids)