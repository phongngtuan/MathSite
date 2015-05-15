from django.shortcuts import render
from rest_framework import viewsets
from maths.models import *
from maths.serializers import AnswerSerializer, QuestionSerializer, TopicSerializer
from django.http import HttpResponse

def index(request):
    return render(request, 'maths/index.html', {})

def checkAnswer(request):
    import json
    from maths.utils import answer_checker as ac
    if request.method == 'POST':
        data = json.loads(request.body.decode("UTF-8"))
        for id, answer in data.items():
            ac.check(id, answer)

    response = json.dumps({'result': 1})
    return HttpResponse(
        response,
        content_type = 'application/json'
        )


class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def get_queryset(self):
        queryset = Question.objects.all()
        print("here")
        topic = self.request.QUERY_PARAMS.get('topic', None)
        print(topic)
        if topic is not None:
            queryset = queryset.filter(topic__id=topic)
        return queryset
    

class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer

    def get_queryset(self):
        queryset = Topic.objects.all()
        level = self.request.QUERY_PARAMS.get('level', None)
        if level is not None:
            t = Question.objects.filter(paper__subject__id=level).values_list('topic', flat=True).distinct()
            queryset = queryset.filter(id__in=list(t))
        return queryset
