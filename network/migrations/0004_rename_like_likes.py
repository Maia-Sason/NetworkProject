# Generated by Django 3.2 on 2021-04-21 20:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('network', '0003_auto_20210421_2013'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Like',
            new_name='Likes',
        ),
    ]