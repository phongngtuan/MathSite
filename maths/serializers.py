from rest_framework import serializers
from maths.models import *

class PaperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paper


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer

class AnswerListingField(serializers.RelatedField):
    def to_representation(self, value):
        import re
        if not value.content:
            value.content=''
        hidden = re.sub(r'"(.*?)"', r'<input>', value.content)
        return {"id": value.id, "part_no": value.part, "content": hidden}

class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerListingField(many=True, read_only=True)
    class Meta:
        model = Question
                                            
class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic

class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationLevel
        
class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
