# Generated by Django 3.2.5 on 2021-07-24 06:18

from django.db import migrations
import wagtailmarkdown.fields


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpage',
            name='body',
            field=wagtailmarkdown.fields.MarkdownField(),
        ),
    ]
