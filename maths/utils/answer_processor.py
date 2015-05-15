import unicodedata


def process_answer_field(content, id):
    import re
    result = content[:]
    x = re.search(r'"[\s\S]*?"', result)
    count = 0
    while x:
        start, stop = x.span()
        result = result[:start]+"<input class='answer-field' type='text' id='{0}-{1}'>".format(id, count)+result[stop:]
        count += 1
        x = re.search(r'"[\s\S]*?"', result)
    return '<div class="answer-wrapper" id="{}">{}<div id=result_{}></div></div>'.format(id, result, id)


def process_answer_database(content):
    import re
    fields = re.findall(r'"(.*?)"', content)
    return fields

def latex2ascii(expression):
    import latex_parser as parser
    result = parser.parse(expression)
    print expression+"===>"+result
    return result

def compare(x, y):
    from sympy import *
    if x and y:
        return simplify(x-y)==0
    else:
        return False

def check_answer(user_answer, db_answer):
    from sympy.parsing.sympy_parser import parse_expr
    print "in checking answer", user_answer, db_answer
    if "" in user_answer:
        return 0
    print
    user_value = [parse_expr(x) for x in user_answer if x]
    print "DEBUG parsed user value"
    db_value = [parse_expr(x) for x in db_answer if x]
    temp_result = [compare(x,y) for x,y in zip(user_value, db_value)]
    print temp_result
    return all(result == True for result in temp_result)
