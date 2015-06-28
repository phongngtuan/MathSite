# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('maths', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paper',
            name='paperset',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='subject',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
