import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "settings")
import django
django.setup()
from maths.models import * 

topics = Topic.objects.all()
for topic in topics:
    f = open("dumps/topics/%s_%s.tex" % (topic.id, topic.title), 'w')
    f.write("\documentclass{article}\n")
    f.write("\\begin{document}\n")
    questions = Question.objects.all().filter(topic__id=topic.id)
    for question in questions:
        f.write("ID: %s\n" % question.id)
        f.write("Content:\n%s" % question.content)
        f.write("Answers:\n")
        answers = Answer.objects.filter(question__id=question.id)
        for answer in answers:
            print(answer.content)
            f.write("%s: %s\n" % (answer.id, answer.content))
        f.write("\n")
    f.write("\end{document}\n")
    f.close()

