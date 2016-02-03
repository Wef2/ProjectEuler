import math

number_array = [True] * 1000000

for i in range(2, int(math.sqrt(1000000))):
    if number_array[i]:
        j = i + i
        while j < 1000000:
            number_array[j] = False
            j += i

prime_numbers = []

for i in range(2, 1000000):
    if number_array[i]:
        prime_numbers.append(i)

max_count = 0
result = 0
for a in prime_numbers:
    value = 0
    count = 0
    for b in range(prime_numbers.index(a), len(prime_numbers)):
        count += 1
        value += prime_numbers[b]
        if value > 1000000:
            break
        if prime_numbers.count(value) != 0:
            if max_count < count:
                max_count = count
                result = value

    check = 0
    for x in range(prime_numbers.index(a), prime_numbers.index(a) + max_count):
        check += prime_numbers[x]
    if check > 1000000:
        break

print(result)
