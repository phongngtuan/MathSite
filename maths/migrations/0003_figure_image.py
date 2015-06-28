# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('maths', '0002_auto_20150627_1646'),
    ]

    operations = [
        migrations.AddField(
            model_name='figure',
            name='image',
            field=models.ImageField(blank=True, upload_to='figures', null=True),
        ),
    ]
