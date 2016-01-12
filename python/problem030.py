result = 0

for i in range(2, 354295):
    str_i = str(i)
    value = 0
    for a in range(0, len(str_i)):
        num = int(str_i[a:a+1])
        five_time = num*num*num*num*num
        value += five_time
    if value == i:
        result += i

print(result)