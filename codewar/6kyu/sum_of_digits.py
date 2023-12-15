# https://www.codewars.com/kata/541c8630095125aba6000c00/train/python

# method 1
def digital_root(n):
    return n if len([*str(n)]) == 1 else digital_root(sum(map(lambda x: int(x), [*str(n)])))

# method 2 
def digital_root(n):
    return n%9 or n and 9 
