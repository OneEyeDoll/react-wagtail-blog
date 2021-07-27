from wagtail.api.v2.endpoints import BaseAPIEndpoint
from .models import BlogCategory
class CategoryAPIEndpoint(BaseAPIEndpoint):
    def detail_view(self, request, pk=None, slug=None):
        model=