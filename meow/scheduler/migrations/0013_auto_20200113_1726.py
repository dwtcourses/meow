# Generated by Django 2.2.6 on 2020-01-14 01:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scheduler', '0012_smposttags'),
    ]

    operations = [
        migrations.CreateModel(
            name='SMPostTag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=25)),
            ],
        ),
        migrations.DeleteModel(
            name='SMPostTags',
        ),
        migrations.AddField(
            model_name='smpost',
            name='tags',
            field=models.ManyToManyField(to='scheduler.SMPostTag'),
        ),
    ]