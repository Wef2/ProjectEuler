def factorial(x):
    value = 1;
    for i in range(1, x+1):
        value *= i
    return value


def c(n, r):
    value = 1;
    value *= factorial(n)
    value /= factorial(r)
    value /= factorial(n-r)
    return value


count = 0
for a in range(10, 101):
    num = 1000000
    for b in range(1, int(a/2) + 1):
        if c(a, b) > num:
            count += 2
    if a % 2 == 0:
        if c(a, int(a/2) + 1) > num:
            count -= 1

result = count
print(result)
