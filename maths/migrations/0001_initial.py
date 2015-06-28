# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('answertype', models.IntegerField(null=True, blank=True)),
                ('part', models.IntegerField()),
                ('content', models.TextField(null=True, blank=True)),
                ('switch', models.IntegerField(null=True, blank=True)),
            ],
            options={
                'db_table': 'answer',
            },
        ),
        migrations.CreateModel(
            name='Answertype',
            fields=[
                ('id', models.IntegerField(serialize=False, primary_key=True)),
                ('description', models.TextField()),
            ],
            options={
                'db_table': 'answertype',
            },
        ),
        migrations.CreateModel(
            name='EducationLevel',
            fields=[
                ('id', models.IntegerField(serialize=False, primary_key=True)),
                ('title', models.CharField(max_length=64, null=True, blank=True)),
                ('description', models.CharField(max_length=1000, null=True, blank=True)),
            ],
            options={
                'db_table': 'education_level',
            },
        ),
        migrations.CreateModel(
            name='Figure',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('qa', models.TextField(null=True, blank=True)),
                ('imagepath', models.CharField(max_length=100, null=True, blank=True)),
            ],
            options={
                'db_table': 'figure',
            },
        ),
        migrations.CreateModel(
            name='Paper',
            fields=[
                ('id', models.CharField(max_length=64, serialize=False, primary_key=True)),
                ('year', models.TextField(null=True, blank=True)),
                ('month', models.TextField(null=True, blank=True)),
                ('number', models.IntegerField(null=True, blank=True)),
                ('subject', models.IntegerField()),
                ('paperset', models.IntegerField()),
            ],
            options={
                'db_table': 'paper',
            },
        ),
        migrations.CreateModel(
            name='Paperset',
            fields=[
                ('id', models.IntegerField(serialize=False, primary_key=True)),
                ('title', models.TextField(null=True, blank=True)),
                ('subject', models.IntegerField()),
            ],
            options={
                'db_table': 'paperset',
            },
        ),
        migrations.CreateModel(
            name='Progress',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, auto_created=True, verbose_name='ID')),
                ('user', models.IntegerField()),
                ('question', models.CharField(max_length=64)),
                ('created', models.DateTimeField()),
                ('score', models.IntegerField(null=True, blank=True)),
            ],
            options={
                'db_table': 'progress',
            },
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.CharField(max_length=64, serialize=False, primary_key=True)),
                ('paper', models.CharField(max_length=64, null=True, blank=True)),
                ('question', models.SmallIntegerField(null=True, blank=True)),
                ('content', models.TextField()),
                ('subtopic', models.IntegerField(null=True, blank=True)),
                ('marks', models.IntegerField(null=True, blank=True)),
                ('source', models.TextField(null=True, blank=True)),
                ('difficulty', models.IntegerField(null=True, blank=True)),
            ],
            options={
                'db_table': 'question',
            },
        ),
        migrations.CreateModel(
            name='Solution',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, auto_created=True, verbose_name='ID')),
                ('question', models.CharField(max_length=64)),
                ('content', models.TextField()),
            ],
            options={
                'db_table': 'solution',
            },
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.IntegerField(serialize=False, primary_key=True)),
                ('title', models.TextField(null=True, blank=True)),
                ('description', models.TextField(null=True, blank=True)),
                ('edu_level', models.ForeignKey(blank=True, db_column='edu_level', to='maths.EducationLevel', null=True)),
            ],
            options={
                'db_table': 'subject',
            },
        ),
        migrations.CreateModel(
            name='Subtopic',
            fields=[
                ('id', models.IntegerField(serialize=False, primary_key=True)),
                ('topic', models.IntegerField(null=True, blank=True)),
                ('title', models.TextField(null=True, blank=True)),
            ],
            options={
                'db_table': 'subtopic',
            },
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('title', models.TextField(null=True, blank=True)),
                ('subject', models.ForeignKey(blank=True, db_column='subject', to='maths.Subject', null=True)),
            ],
            options={
                'db_table': 'topic',
            },
        ),
        migrations.AddField(
            model_name='question',
            name='topic',
            field=models.ForeignKey(blank=True, db_column='topic', to='maths.Topic', null=True),
        ),
        migrations.AddField(
            model_name='figure',
            name='qa_id',
            field=models.ForeignKey(db_column='qa_id', to='maths.Question', related_name='figures'),
        ),
        migrations.AddField(
            model_name='answer',
            name='question',
            field=models.ForeignKey(db_column='question', to='maths.Question', related_name='answers'),
        ),
    ]
