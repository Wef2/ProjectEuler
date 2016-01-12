result = 0

for i in range(2, 354295):
    value = 0
    for a in str(i):
        num = int(a)
        value += num**5
    if value == i:
        result += i

print(result)