prime_numbers = [2]
current_number = 3


def set_prime_number(n):
    global current_number
    while True:
        count = 0
        prime_numbers.append(current_number)
        for i in prime_numbers:
            if count > 1:
                break
            if current_number % i == 0:
                count += 1
        if count == 1:
            current_number += 1
            break
        else:
            prime_numbers.pop()
            current_number += 1


index = 0
value = 600851475143;

while True:
    if value % prime_numbers[index] == 0:
        value /= prime_numbers[index]
        if value == 1:
            result = prime_numbers[index]
            break
    else:
        index += 1
        set_prime_number(index)

print(result)

