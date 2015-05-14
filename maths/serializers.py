from rest_framework import serializers
from maths.models import Answer, Question, Topic
class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer

class AnswerListingField(serializers.RelatedField):
    def to_representation(self, value):
        import re
        import json
        if not value.content:
            value.content=''
        hidden = re.sub(r'"(.*?)"', r'<input>', value.content)
        return {"part": value.part_no, "content": hidden}


class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerListingField(many=True, read_only=True)
    class Meta:
        model = Question
                                            
class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
