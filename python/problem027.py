import math

number_array = [True] * 100000

for i in range(2, int(math.sqrt(100000))):
    if number_array[i]:
        j = i + i
        while j < 100000:
            number_array[j] = False
            j += i

primes_under_thousand = []
for i in range(2, 1000):
    if number_array[i]:
        primes_under_thousand.append(i)

max_count = 0
max_ab = 0
for b in primes_under_thousand:
    for a in range(2 - b, 1000):
        count = 0
        n = 0
        while n * n + a * n + b > 0 and number_array[n * n + a * n + b]:
            count += 1
            if count > max_count:
                max_count = count
                max_ab = a * b
            n += 1

result = max_ab
print(result)
