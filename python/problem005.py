prime_numbers = [2]
max_values = []
temp_values = []


def is_prime(n):
    for prime in prime_numbers:
        if n % prime == 0:
            return False
    return True


def init_temp_values():
    for a in range(0, len(temp_values)):
        temp_values[a] = 0


for i in range(3, 21):
    if is_prime(i):
        prime_numbers.append(i)

for a in prime_numbers:
    max_values.append(0)
    temp_values.append(0)

for x in range(2, 21):
    init_temp_values()
    number = x
    pointer = 0
    while number > 1:
        if number % prime_numbers[pointer] == 0:
            number /= prime_numbers[pointer]
            temp_values[pointer] += 1
        else:
            pointer += 1
    for y in range(0, len(temp_values)):
        if max_values[y] < temp_values[y]:
            max_values[y] = temp_values[y]

result = 1
for i in range(0, len(max_values)):
    result *= prime_numbers[i] ** max_values[i]

print(result)