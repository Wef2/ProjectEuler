result = 0
index = 0
true = 1


def fibonacci(n):
    if n == 1:
        return 1
    elif n == 2:
        return 2
    elif n > 2:
        return fibonacci(n - 2) + fibonacci(n - 1)


while True:
    index += 1
    if fibonacci(index) < 4000000:
        if fibonacci(index) % 2 == 0:
            result += fibonacci(index)
    else:
        break

print(result)
