# Generated by Django 3.2.5 on 2021-07-25 08:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_auto_20210725_0827'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpage',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='blog.blogcategory'),
        ),
    ]
