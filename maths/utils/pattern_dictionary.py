rules = [
    (r'\\left\(', r'('),
    (r'\\right\)', r')'),
    (r'\\(sin|cos|tan|cot)\^([^\{\}\(\)]+)\s([^\{\}\(\)]+)',  r'\1(\3)**(\2)'),#trigonometric with power
    (r'\\(sin|cos|tan|cot)\s+([^\{\}\(\)]+)',  r'\1(\2)'),  #trigonometric
    (r'\\sqrt\{([^\{\}]+)\}', r'sqrt(\1)'), #square_root
    (r'([^\{\}]+)\^([^\{\}]+)', r'\1**\2'), # power
    (r'\\frac\{([^\{\}]+)\}\{([^\{\}]+)\}', r'(\1)/(\2)'), #fraction
    (r'\)\(',r')*('), #2 consecutive parentheses
    (r'\)\s([\\\w]+)',r')*\1'), #closing parentheses + symbols
    (r'(\d)([A-Za-z])',r'\1*\2'),
    ]
