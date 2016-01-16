import math

prime_numbers = [2]


def is_prime_number(n):
    for i in prime_numbers:
        if n % i == 0:
            return False
    return True


result = 2
index = 3
while index < math.sqrt(2000000):
    if is_prime_number(index):
        prime_numbers.append(index)
        result += index
    index += 2

while index < 2000000:
    if is_prime_number(index):
        result += index
    index += 2

print(result)
