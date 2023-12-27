# https://www.codewars.com/kata/57f609022f4d534f05000024/solutions/python

# method 1
from functools import reduce
def stray1(arr):
    return reduce(lambda acc, cur: acc ^ cur, arr, 0)

# method 2
def stray2(arr):
    return min(arr, key=arr.count)

