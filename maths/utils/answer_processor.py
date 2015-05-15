import unicodedata

def extract_fields(content):
    '''Extract answer fields in a string and return a dictionary'''
    import re
    fields = re.findall(r'"(.*?)"', content)
    return(dict([(index, val) for index, val in enumerate(fields)]))

def latex2ascii(expression):
    import latex_parser as parser
    result = parser.parse(expression)
    print(expression+"===>"+result)
    return result

def compare(x, y):
    '''Compare 2 expressions in asciiMath format'''
    import sympy
    if x and y:
        return simplify(x-y)==0
    else:
        return False
