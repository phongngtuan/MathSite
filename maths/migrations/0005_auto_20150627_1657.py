# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('maths', '0004_remove_figure_imagepath'),
    ]

    operations = [
        migrations.RenameField(
            model_name='figure',
            old_name='qa_id',
            new_name='question',
        ),
    ]
