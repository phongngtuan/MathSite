from rest_framework import serializers
from maths.models import Answer, Question, Topic
class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer


class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True)
    class Meta:
        model = Question
                                            
class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
