prime_numbers = [2]
temp_values = [0]


def is_prime(n):
    for a in prime_numbers:
        if n % a == 0:
            return False
    return True


def init_temp_values():
    for b in range(0, len(temp_values)):
        temp_values[b] = 0


def get_number_of_divisors(x, y):
    init_temp_values()
    number_of_divisors = 1
    number1 = x
    number2 = y
    pointer1 = 0
    pointer2 = 0
    while number1 > 1:
        if number1 % prime_numbers[pointer1] == 0:
            number1 /= prime_numbers[pointer1]
            temp_values[pointer1] += 1
        else:
            pointer1 += 1
    while number2 > 1:
        if number2 % prime_numbers[pointer2] == 0:
            number2 /= prime_numbers[pointer2]
            temp_values[pointer2] += 1
        else:
            pointer2 += 1
    for y in temp_values:
        number_of_divisors *= y + 1
    return number_of_divisors


index = 2
check_point = 3
result = 0

while True:
    n1 = 0
    n2 = 0
    big_number = 0
    if index % 2 == 1:
        n1 = index
        n2 = (index + 1) / 2
        big_number = n1
    else:
        n1 = index / 2
        n2 = index + 1
        big_number = n2
    for i in range(check_point, big_number + 1):
        if is_prime(i):
            prime_numbers.append(i)
            temp_values.append(0)
    check_point = big_number
    index += 1
    if get_number_of_divisors(n1, n2) > 500:
        result = n1 * n2
        break

print(result)
