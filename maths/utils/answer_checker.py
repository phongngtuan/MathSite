from maths.models import Answer
from maths.utils import answer_processor as ap

def check(id, answer):
    print(id)
    print(answer)
    answer_db = ap.extract_fields(Answer.objects.get(pk=id).content)
    partial_result = [compare(part, answer[key]) for key, part in answer_db.items()]
    return  all(x for x in partial_result)

def compare(x, y):
    '''Comparing 2 expressions'''
    print("comparing")
    print(x)
    print(y)
    return ap.evaluate(ap.latex2ascii(x), ap.latex2ascii(y))

