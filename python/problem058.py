import math


def is_prime(n):
    for i in range(2, int(math.sqrt(n))):
        if n % i == 0:
            return False
    return True


index = 2
primes = 3
total = 5
while primes / total > 0.1:
    index += 1
    number1 = (2 * index - 1) ** 2 - 6 * (index - 1)
    number2 = (2 * index - 1) ** 2 - 4 * (index - 1)
    number3 = (2 * index - 1) ** 2 - 2 * (index - 1)
    if is_prime(number1):
        primes += 1
    if is_prime(number2):
        primes += 1
    if is_prime(number3):
        primes += 1
    total += 4

result = 2 * index - 1
print(result)
