# Generated by Django 2.0.4 on 2019-07-22 02:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scheduler', '0010_auto_20190716_1418'),
    ]

    operations = [
        migrations.AddField(
            model_name='posthistory',
            name='post_newsletter',
            field=models.TextField(blank=True, default=None, null=True),
        ),
    ]
