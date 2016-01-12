def d(n):
    value = 0
    for i in range(1, n):
        if n % i == 0:
            value += i
    return value

result = 0

for a in range(2, 10001):
    if a != d(a) and a == d(d(a)):
        result += a

print(result)
