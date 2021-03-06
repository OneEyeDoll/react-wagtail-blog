# Generated by Django 3.2.5 on 2021-07-25 08:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlogCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('slug', models.SlugField(max_length=80, unique=True)),
            ],
            options={
                'verbose_name': 'Category',
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]
