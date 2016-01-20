def factorial(n):
    value = 1
    for i in range(1, n + 1):
        value *= i
    return value


def path(x, y):
    return factorial(x + y) / (factorial(x) * factorial(y))


result = path(20, 20)
print(result)
