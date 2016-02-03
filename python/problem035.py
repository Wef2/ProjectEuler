import math

number_array = [True] * 1000000

for i in range(2, int(math.sqrt(1000000))):
    if number_array[i]:
        j = i + i
        while j < 1000000:
            number_array[j] = False
            j += i


def is_circular_prime(n):
    str_n = str(n)
    for a in range(0, len(str_n) - 1):
        temp_str = str_n[a + 1:len(str_n)] + str_n[0:a + 1]
        temp_value = int(temp_str)
        if not number_array[temp_value]:
            return False

    return True


result = 0
for i in range(2, 1000000):
    if number_array[i] and is_circular_prime(i):
        result += 1
print(result)
