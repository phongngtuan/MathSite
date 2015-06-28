# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('maths', '0009_auto_20150628_0850'),
    ]

    operations = [
        migrations.AlterField(
            model_name='figure',
            name='sequence',
            field=models.IntegerField(null=True, blank=True),
        ),
    ]
