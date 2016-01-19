result = 0

for a in range(2, 100):
    for b in range(2, 100):
        value = a ** b
        value_sum = 0
        for i in str(value):
            value_sum += int(i)
        if value_sum > result:
            result = value_sum

print(result)