value = 1
result = 0

for i in range(1, 101):
    value *= i

for i in str(value):
    result += int(i)

print(result)
