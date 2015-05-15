import sys
import re
import pattern_dictionary as inventory
def replace_recursive(pattern, repl, expression):
    count = 1
    expr = expression[:]
    while count != 0:
        expr, count =re.subn(pattern, repl, expr)
        #print expr
    return expr

def parse(expression):
    #dictionary = {
    #        r'\\sqrt\{([^\{\}]+)\}':r'sqrt(\1)', #square_root
    #        r'([^\{\}]+)\^([^\{\}]+)':r'(\1**\2)', # power
    #        r'\\frac\{([^\{\}]+)\}\{([^\{\}]+)\}': r'(\1)/(\2)', #fraction
    #        }
    expr = expression[:]
    for pattern, repl in inventory.rules:
        expr = replace_recursive(pattern, repl, expr)
    print "parsed", expression
    return expr

def latex2ascii(expression):
    expr = expression[:]
    expr = parse(expr)
    #get fraction
    #expr = replace_sqrt(expr)
    #expr = replace_power(expr)
    #expr = replace_fraction(expr)
    print(expr)

def main():
    value = sys.argv[1]
    latex2ascii(value)

if __name__=="__main__":
    main()
