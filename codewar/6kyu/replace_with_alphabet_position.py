# https://www.codewars.com/kata/546f922b54af40e1e90001da/train/python

# method 1 
def alphabet_position(text):
    a = []
    for c in text:
        o = ord(c.lower())
        if(97 <= o <= 122):
            a.append(str(o-96))
    return ' '.join(a)

# method 2 
def alphabet_position_2(text):
    return ' '.join(str(ord(c) - 96) for c in text.lower() if c.isalpha())
