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

while True:
    set_prime_number(index)
    if index > 10000:
        break
    index += 1

result = prime_numbers[10000]
print(result)
