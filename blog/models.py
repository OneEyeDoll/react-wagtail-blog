from django.db import models
from wagtail.api import APIField

from modelcluster.fields import ParentalKey


from wagtail.core.models import Page, Orderable
from wagtail.core.fields import RichTextField
from wagtailmarkdown.fields import MarkdownField
from wagtail.admin.edit_handlers import FieldPanel, MultiFieldPanel, InlinePanel
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.search import index
from .fields import CategoryField
from wagtail.snippets.models import register_snippet

from modelcluster.contrib.taggit import ClusterTaggableManager
from taggit.managers import TaggableManager
from taggit.models import TaggedItemBase


@register_snippet
class BlogCategory(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, max_length=80)

    panels = [
        FieldPanel("name"),
        FieldPanel("slug"),
    ]
    api_fields=[
        APIField('name'),
        APIField('slug'),
    ]
    def __str__(self):
        return self.name
    

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"
        
class BlogPageTag(TaggedItemBase):
    content_object = ParentalKey(
        'BlogPage',
        related_name='tagged_items',
        on_delete=models.CASCADE,
    )



class BlogPage(Page):

    category=models.ForeignKey(
        'BlogCategory',
        on_delete=models.SET_NULL,
        null=True,
    )
    # Database fields
    tags = ClusterTaggableManager(through=BlogPageTag)
    body = MarkdownField()
    date = models.DateField("Post date")
    feed_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )


    # Search index configuration

    search_fields = Page.search_fields + [
        index.SearchField('body'),
        index.FilterField('date'),
        index.FilterField('category'),
    ]


    # Editor panels configuration

    content_panels = Page.content_panels + [
        FieldPanel('category'),
        FieldPanel('date'),
        FieldPanel('body', classname="full"),
        InlinePanel('related_links', label="Related links"),
        FieldPanel('tags')
    ]

    promote_panels = [
        MultiFieldPanel(Page.promote_panels, "Common page configuration"),
        ImageChooserPanel('feed_image'),
    ]

    api_fields = [
        APIField('date'),
        APIField('body'),
        APIField('feed_image'),
        APIField('tags'),
        APIField('category',serializer=CategoryField()),
    ]
    # Parent page / subpage type rules



class BlogPageRelatedLink(Orderable):
    page = ParentalKey(BlogPage, on_delete=models.CASCADE, related_name='related_links')
    name = models.CharField(max_length=255)
    url = models.URLField()

    panels = [
        FieldPanel('name'),
        FieldPanel('url'),
    ]
