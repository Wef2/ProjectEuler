result = 0

for i in range(100, 1000):
    for j in range(100, 1000):
        status = True
        value = i * j
        str_value = str(value)
        for k in range(0, len(str_value)):
            if str_value[k:k + 1] != str_value[len(str_value) - 1 - k:len(str_value) - k]:
                status = False
                break
        if (status is True) and (result < value):
            result = value

print(result)
