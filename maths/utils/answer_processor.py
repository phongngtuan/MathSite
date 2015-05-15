import unicodedata
from sympy import *
from sympy.parsing.sympy_parser import parse_expr
def extract_fields(content):
    '''Extract answer fields in a string and return a dictionary'''
    import re
    fields = re.findall(r'"(.*?)"', content)
    return(dict([(str(index), val) for index, val in enumerate(fields)]))

def latex2ascii(expression):
    from maths.utils import latex_parser as parser
    result = parser.parse(expression)
    return result

def compare(x, y):
    '''Compare 2 strings in asciiMath format'''
    if x and y:
        x = parse_expr(x)
        y = parse_expr(y)
        print("parsed")
        #import pdb; pdb.set_trace()
        z = simplify(x-y)
        return(z==0)
    else:
        return False
