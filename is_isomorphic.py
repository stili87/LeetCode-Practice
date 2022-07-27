# Put key value pairs in a dictionary. Key is first string char, value second string char. Also make a second dictonary and reservse the key values
# as you go through the strings, if key exists, check if value matches. If it doent exist add it to dicts. If key exists and value does not match, return false
# edge cases, empty strings = true?, strings of different sizes = false.

def is_isomorphic (str1, str2):
    if len(str1) != len(str2):
        return False
    if len(str1) == 0  and len(str2) == 0:
        return True
    dict1 = {}
    dict2 = {}
    for x in range(len(str1) - 1):
        if x in dict1
    return True


is_isomorphic('ddd', 'ddd')
