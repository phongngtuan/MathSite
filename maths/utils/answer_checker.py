from maths.models import Answer
def check(id, answer):
    print(id)
    print(answer)
    answer_db = Answer.objects.get(pk=id)
    print(answer_db)

