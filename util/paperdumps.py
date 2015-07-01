import os

import django
django.setup()
from maths.models import * 

papers = Paper.objects.all()
for paper in papers:
    f = open("dumps/papers/%s_%s-%s.tex" % (paper.id, paper.month, paper.year), 'w')
    f.write("\documentclass{article}\n")
    f.write("\\begin{document}\n")
    questions = Question.objects.all().filter(paper=paper.id)
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

