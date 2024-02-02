# https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python

# method 1
def disemvowel(str):
    return ''.join([i for i in str if i.lower() not in "aeiou"])

# method 2
import re
def disemvowel_2(string):
    return re.sub('[aeiou]', '', string, flags = re.IGNORECASE)
