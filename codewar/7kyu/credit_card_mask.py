# https://www.codewars.com/kata/5412509bd436bd33920011bc/train/python

# method 1
def maskify(cc):
    return ''.join([v if len(cc) - i <= 4 else '#'  for i,v in enumerate(cc)])


# method 2
def maskify(cc):
    return '#'*(len(cc)-4) + cc[-4:]
