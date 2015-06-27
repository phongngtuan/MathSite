from django.shortcuts import render
from django.contrib.auth import authenticate, login
from rest_framework import views, viewsets
from rest_framework.response import Response
from maths.models import *
from maths.serializers import *
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt, csrf_protect
import json

def index(request):
    return render(request, 'maths/index.html', {})

class LoginView(views.APIView):
    def post(self, request):
        data = request.data
        username = data.get('username', None)
        password = data.get('password', None)
        print("Logging in user")
        print(username)
        print(password)
        account = authenticate(username="phongnt", password="123456789")
        print("here")
        print(account)
        return Response()


def checkAnswer(request):
    from maths.utils import answer_checker as ac
    if request.method == 'POST':
        data = json.loads(request.body.decode("UTF-8"))
        results = [ (id, ac.check(id, answer)) for id, answer in data.items()]
    response = json.dumps(dict(results))
    print(response)
    return HttpResponse(
        response,
        content_type = 'application/json'
        )


class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

    def list(self, request, question_pk=None):
        print(question_pk)
        answers = self.queryset.filter(question_id=question_pk)
        serializer = AnswerSerializer(answers, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, question_pk=None):
        answer = self.queryset.get(part=pk, question=question_pk)
        serializer = AnswerSerializer(answer, many = False)
        return Response(serializer.data)


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def get_queryset(self):
        queryset = Question.objects.all()
        topic = self.request.QUERY_PARAMS.get('topic', None)
        paper = self.request.QUERY_PARAMS.get('paper', None)
        print(topic)
        if topic is not None:
            queryset = queryset.filter(topic__id=topic)
        elif paper is not None:
            queryset = queryset.filter(paper=paper)
        return queryset
    

class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer

    def get_queryset(self):
        queryset = Topic.objects.all()
        level = self.request.QUERY_PARAMS.get('level', None)
        if level is not None:
            queryset = queryset.filter(subject__edu_level=level)
        return queryset

class LevelViewSet(viewsets.ModelViewSet):
    queryset = EducationLevel.objects.all()
    serializer_class = LevelSerializer

class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class PaperViewSet(viewsets.ModelViewSet):
    queryset = Paper.objects.all()
    serializer_class = PaperSerializer

@csrf_exempt
def upload_file(request):
    print("here")
    print(request)
    if request.method == 'POST':
        file = request.FILES['file']
        f = open("maths/static/maths/figures/%s" %file.name, 'wb+')
        for chunk in file.chunks():
            f.write(chunk)
        print(file)
        response = json.dumps({'filename': file.name, 'path': "/static/maths/figures/%s" %file.name})
        return HttpResponse(response,
        content_type = 'application/json')
    return HttpResponse("FAIL")
