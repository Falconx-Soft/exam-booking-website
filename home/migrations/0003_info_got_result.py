# Generated by Django 4.1.4 on 2022-12-20 18:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_rename_note_info'),
    ]

    operations = [
        migrations.AddField(
            model_name='info',
            name='got_result',
            field=models.BooleanField(default=False),
        ),
    ]
