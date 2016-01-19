fibonacci = [0, 1, 1]


def set_fibonacci(n):
    fibonacci.append(fibonacci[n - 1] + fibonacci[n - 2])

result = 2
while len(str(fibonacci[result])) < 1000:
    result += 1
    set_fibonacci(result)

print(result)
