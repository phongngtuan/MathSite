from django.db import models

# Create your models here.
class Answer(models.Model):
    answertype = models.ForeignKey('Answertype')
    question = models.ForeignKey('Question', related_name='answers')
    part_no = models.CharField(max_length=3)
    content = models.TextField(blank=True)
    switch = models.IntegerField()
    
    def __str__(self):
        return self.content

    class Meta:
        managed = False
        db_table = 'answer'
        unique_together = ('question', 'part_no')


class Answertype(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    description = models.TextField()

    class Meta:
        managed = False
        db_table = 'answertype'


class Assessment(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    name = models.CharField(max_length=30)
    type = models.CharField(max_length=1)
    active = models.IntegerField()
    engine = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'assessment'


class AuthGroup(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    group = models.ForeignKey(AuthGroup)
    permission = models.ForeignKey('AuthPermission')

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'


class AuthPermission(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    name = models.CharField(max_length=50)
    content_type = models.ForeignKey('DjangoContentType')
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'


class AuthUser(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField()
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=75)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    user = models.ForeignKey(AuthUser)
    group = models.ForeignKey(AuthGroup)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'


class AuthUserUserPermissions(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    user = models.ForeignKey(AuthUser)
    permission = models.ForeignKey(AuthPermission)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'


class Block(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    title = models.TextField(blank=True)
    subject = models.ForeignKey('Subject', blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        managed = False
        db_table = 'block'


class DjangoAdminLog(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.IntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', blank=True, null=True)
    user = models.ForeignKey(AuthUser)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    name = models.CharField(max_length=100)
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'


class DjangoMigrations(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class EducationLevel(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    title = models.CharField(max_length=64, blank=True)
    description = models.CharField(max_length=1000, blank=True)

    class Meta:
        managed = False
        db_table = 'education_level'


class Image(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    qa = models.TextField(blank=True)
    qa_id = models.ForeignKey('Question')
    imagepath = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'image'


class Meta(models.Model):
    metatag = models.CharField(primary_key=True, max_length=30)

    class Meta:
        managed = False
        db_table = 'meta'


class Paper(models.Model):
    id = models.CharField(primary_key=True, max_length=64)
    year = models.TextField(blank=True)
    month = models.TextField(blank=True)
    number = models.IntegerField(blank=True, null=True)
    subject = models.ForeignKey('Subject')
    paperset = models.ForeignKey('Paperset')

    def __str__(self):
        return "{0}/{1}/{2}".format(self.year, self.month, self.number)

    class Meta:
        managed = False
        db_table = 'paper'


class Paperset(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    title = models.TextField(blank=True)
    subject = models.ForeignKey('Subject')

    def __str__(self):
        return self.title


    class Meta:
        managed = False
        db_table = 'paperset'


class Progress(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    user = models.ForeignKey(AuthUser)
    question_id = models.ForeignKey('Question')
    created = models.DateTimeField()
    score = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'progress'


class QnaAsk(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    title = models.CharField(max_length=500, blank=True)
    content = models.CharField(max_length=1000, blank=True)
    created = models.DateTimeField()
    modified = models.DateTimeField()
    author = models.ForeignKey(AuthUser, blank=True, null=True)
    view = models.IntegerField()
    topic = models.ForeignKey('Topic')
    subject = models.ForeignKey('Subject')

    class Meta:
        managed = False
        db_table = 'qna_ask'


class QnaAskfile(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    docfile = models.CharField(max_length=100)
    ask = models.ForeignKey(QnaAsk, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'qna_askfile'


class Question(models.Model):
    id = models.CharField(primary_key=True, max_length=64)
    paper = models.ForeignKey(Paper, blank=True, null=True)
    question_no = models.IntegerField(blank=True, null=True)
    content = models.TextField()
    topic = models.ForeignKey('Topic', blank=True, null=True)
    subtopic = models.ForeignKey('Subtopic', blank=True, null=True)
    marks = models.IntegerField(blank=True, null=True)
    source = models.TextField()
    difficulty = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'question'

    def __str__(self):
        return self.content


class Questionmeta(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    question = models.ForeignKey(Question)
    meta = models.ForeignKey(Meta)
    content = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'questionmeta'


class Response(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    user = models.ForeignKey(AuthUser)
    question = models.ForeignKey(Question)
    response = models.TextField()
    date = models.DateTimeField()
    duration = models.IntegerField(blank=True, null=True)
    correctness = models.DecimalField(max_digits=3, decimal_places=2, blank=True, null=True)
    criterion = models.DecimalField(max_digits=3, decimal_places=1)
    ability = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    assessment = models.ForeignKey(Assessment)

    class Meta:
        managed = False
        db_table = 'response'


class Solution(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    question = models.ForeignKey(Question)
    content = models.TextField()

    class Meta:
        managed = False
        db_table = 'solution'


class Subject(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    title = models.TextField(blank=True)
    edu_level = models.ForeignKey(EducationLevel, blank=True, null=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title

    class Meta:
        managed = False
        db_table = 'subject'


class Subtopic(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    topic = models.ForeignKey('Topic', blank=True, null=True)
    title = models.TextField(blank=True)

    def __str__(self):
        return self.title

    class Meta:
        managed = False
        db_table = 'subtopic'


class Tag(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    question = models.ForeignKey(Question, blank=True, null=True)
    tagdefinition = models.ForeignKey('Tagdefinition', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tag'


class Tagdefinition(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    title = models.TextField(blank=True)
    type = models.TextField(blank=True)
    topic = models.ForeignKey('Topic', blank=True, null=True)
    content = models.TextField(blank=True)

    class Meta:
        managed = False
        db_table = 'tagdefinition'


class Test(models.Model):
    id = models.CharField(primary_key=True, max_length=6)
    generated = models.DateTimeField()
    assessment = models.ForeignKey(Assessment)
    state = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'test'


class Testquestion(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    question = models.ForeignKey(Question)
    test = models.ForeignKey(Test)

    class Meta:
        managed = False
        db_table = 'testquestion'


class Testresponse(models.Model):
    response_ptr = models.ForeignKey(Response, primary_key=True)
    test = models.ForeignKey(Test)

    class Meta:
        managed = False
        db_table = 'testresponse'


class Topic(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    block = models.ForeignKey(Block, blank=True, null=True)
    title = models.TextField(blank=True)

    def __str__(self):
        return self.title

    class Meta:
        managed = False
        db_table = 'topic'


class Userprofile(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    user = models.ForeignKey(AuthUser, unique=True)
    debug = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'userprofile'


class Userusage(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    user = models.ForeignKey(AuthUser)
    datetime = models.DateTimeField()
    page = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'userusage'

