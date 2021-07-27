from rest_framework.fields import Field


class CategoryField(Field):
    def to_representation(self, category):
        try:
            return {"name": category.name, "slug": category.slug, 'id':category.id}
        except Exception:
            return []
