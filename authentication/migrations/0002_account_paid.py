# Generated by Django 3.2 on 2023-01-11 20:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='paid',
            field=models.BooleanField(default=True),
        ),
    ]
