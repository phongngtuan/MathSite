# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('maths', '0008_auto_20150628_0847'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='paper',
            field=models.ForeignKey(blank=True, null=True, to='maths.Paper'),
        ),
    ]
