def factorial(n):
    value = 1
    for i in range(1, n + 1):
        value *= i
    return value


result = 0

for a in range(10, 1000000):
    summary = 0
    for b in str(a):
        summary += factorial(int(b))
    if a == summary:
        result += a

print(result)
