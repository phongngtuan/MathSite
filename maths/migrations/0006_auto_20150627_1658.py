# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('maths', '0005_auto_20150627_1657'),
    ]

    operations = [
        migrations.AlterField(
            model_name='figure',
            name='question',
            field=models.ForeignKey(to='maths.Question', related_name='figures'),
        ),
    ]
