def to_nine(n):
    i = 1
    string = ""
    while len(string) < 9:
        number = n * i
        string += str(number)
        i += 1
    if len(string) != 9:
        return False
    else:
        return string


def is_pandigital(m):
    pandigital_array = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    temp_array = []
    return_value = False
    for a in m:
        temp_array.append(a)
    temp_array.sort()
    if str(temp_array) == str(pandigital_array):
        return_value = True
    return return_value


max_pandigital = 0
for i in range(1, 10000):
    nine = to_nine(i)
    if nine is not False:
        if is_pandigital(nine):
            pandigital = int(nine)
            if max_pandigital < pandigital:
                max_pandigital = pandigital

result = max_pandigital
print(result)
