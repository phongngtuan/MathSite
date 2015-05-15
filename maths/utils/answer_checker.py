from maths.models import Answer
from maths.utils import answer_processor as ap
def check(id, answer):
    print(id)
    print(answer)
    answer_db = ap.extract_fields(Answer.objects.get(pk=id).content)
    for key, part in answer_db.items():
        print("comparing")
        result = ap.compare(ap.latex2ascii(part), ap.latex2ascii(answer[key]))
        print(result)

