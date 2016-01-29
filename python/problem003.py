prime_numbers = [2]
current_number = 3


def is_prime(n):
    for a in prime_numbers:
        if n % a == 0:
            return False
    return True


index = 0
value = 600851475143;

while value > 1:
    if value % prime_numbers[index] == 0:
        value /= prime_numbers[index]
    else:
        if is_prime(current_number):
            prime_numbers.append(current_number)
            index += 1
        current_number += 1

result = prime_numbers[index]
print(result)
