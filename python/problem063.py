result = 0

for n in range(1, 22):
    for i in range(1, 10):
        value = i ** n
        if len(str(value)) == n:
            result += 1

print(result)