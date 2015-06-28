# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('maths', '0006_auto_20150627_1658'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='question',
            field=models.ForeignKey(related_name='answers', to='maths.Question'),
        ),
        migrations.AlterField(
            model_name='question',
            name='topic',
            field=models.ForeignKey(null=True, blank=True, to='maths.Topic'),
        ),
        migrations.AlterField(
            model_name='subject',
            name='edu_level',
            field=models.ForeignKey(null=True, blank=True, to='maths.EducationLevel'),
        ),
        migrations.AlterField(
            model_name='topic',
            name='subject',
            field=models.ForeignKey(null=True, blank=True, to='maths.Subject'),
        ),
    ]
