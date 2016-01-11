result = 28433

for i in range(1, 7830458):
    result *= 2
    str_result = str(result)
    if len(str_result) > 10:
        str_result = str_result[1:11]
        result = int(str_result)

result += 1

print(result)