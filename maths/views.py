from django.shortcuts import render
from rest_framework import viewsets
from maths.models import *
from maths.serializers import AnswerSerializer, QuestionSerializer, TopicSerializer


def index(request):
    return render(request, 'maths/index.html', {})


class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    

class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
