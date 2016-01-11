def last_ten(n):
    value = 1
    for i in range(1, n + 1):
        value *= n
        str_value = str(value)
        if len(str_value) > 10:
            str_value = str_value[len(str_value) - 10:len(str_value)]
            value = int(str_value)
    return value

result = 0

for a in range(1, 1001):
    result = result + last_ten(a)

str_result = str(result)
str_result = str_result[len(str_result) - 10:len(str_result)]
result = int(str_result)

print(result)
