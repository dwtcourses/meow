# Generated by Django 2.2.6 on 2020-01-14 05:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scheduler', '0013_auto_20200113_1726'),
    ]

    operations = [
        migrations.AddField(
            model_name='smposttag',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]