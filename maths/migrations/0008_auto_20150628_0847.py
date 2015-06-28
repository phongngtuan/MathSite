# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('maths', '0007_auto_20150627_1701'),
    ]

    operations = [
        migrations.AddField(
            model_name='figure',
            name='sequence',
            field=models.IntegerField(blank=True, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='figure',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='maths/figures'),
        ),
    ]
