from rest_framework.serializers import ModelSerializer

from .models import BlogCategory

class CategorySerializer(ModelSerializer):
    class Meta:
        model=BlogCategory
        fields=('id','name','slug')
