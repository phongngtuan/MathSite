# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
#
# Also note: You'll have to insert the output of 'django-admin sqlcustom [app_label]'
# into your database.
from __future__ import unicode_literals

from django.db import models


class Answer(models.Model):
    answertype = models.IntegerField()
    question = models.ForeignKey('Question', related_name='answers', db_column='question')
    part_no = models.IntegerField()
    content = models.TextField(blank=True, null=True)
    switch = models.IntegerField()

    def list(self, request, question_pk=None):
        return Answer.objects.filter(question__id=question_pk)

    class Meta:
        db_table = 'answer'


class Answertype(models.Model):
    id = models.IntegerField(primary_key=True)
    description = models.TextField()

    class Meta:
        managed = False
        db_table = 'answertype'


class EducationLevel(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=64, blank=True, null=True)
    description = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education_level'


class Image(models.Model):
    qa = models.TextField(blank=True, null=True)
    qa_id = models.CharField(max_length=64)
    imagepath = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'image'


class Paper(models.Model):
    id = models.CharField(primary_key=True, max_length=64)
    year = models.TextField(blank=True, null=True)
    month = models.TextField(blank=True, null=True)
    number = models.IntegerField(blank=True, null=True)
    subject = models.IntegerField()
    paperset = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'paper'


class Paperset(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.TextField(blank=True, null=True)
    subject = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'paperset'


class Progress(models.Model):
    user = models.IntegerField()
    question = models.CharField(max_length=64)
    created = models.DateTimeField()
    score = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'progress'


class Question(models.Model):
    id = models.CharField(primary_key=True, max_length=64)
    paper = models.CharField(max_length=64, blank=True, null=True)
    question = models.SmallIntegerField(blank=True, null=True)
    content = models.TextField()
    topic = models.ForeignKey('Topic', db_column='topic', blank=True, null=True)
    subtopic = models.IntegerField(blank=True, null=True)
    marks = models.IntegerField(blank=True, null=True)
    source = models.TextField(blank=True, null=True)
    difficulty = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'question'


class Solution(models.Model):
    question = models.CharField(max_length=64)
    content = models.TextField()

    class Meta:
        managed = False
        db_table = 'solution'


class Subject(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.TextField(blank=True, null=True)
    edu_level = models.ForeignKey(EducationLevel, db_column='edu_level', blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'subject'


class Subtopic(models.Model):
    id = models.IntegerField(primary_key=True)
    topic = models.IntegerField(blank=True, null=True)
    title = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'subtopic'


class Topic(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField(blank=True, null=True)
    subject = models.ForeignKey(Subject, db_column='subject', blank=True, null=True)

    class Meta:
        db_table = 'topic'
