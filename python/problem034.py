def factorial(n):
    value = 1
    for i in range(1, n + 1):
        value *= i
    return value


result = 0

for a in range(10, 1000000):
    sum_of_numbers = 0
    for b in str(a):
        sum_of_numbers += factorial(int(b))
    if a == sum_of_numbers:
        result += a

print(result)
