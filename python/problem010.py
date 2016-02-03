import math

number_array = [True]*2000000

for i in range(2, int(math.sqrt(2000000))):
    if number_array[i]:
        j = i+i
        while j < 2000000:
            number_array[j] = False
            j += i

result = 0
for i in range(2, 2000000):
    if number_array[i]:
        result += i
print(result)
