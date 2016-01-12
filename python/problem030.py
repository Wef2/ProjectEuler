result = 0

for i in range(2, 354295):
    str_i = str(i)
    value = 0
    for a in range(0, len(str_i)):
        num = int(str_i[a:a+1])
        value += num**5
    if value == i:
        result += i

print(result)