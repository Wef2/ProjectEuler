import math

number_array = [True]*200000

for i in range(2, int(math.sqrt(200000))):
    if number_array[i]:
        j = i+i
        while j < 200000:
            number_array[j] = False
            j += i

result = 1
count = 0
while count<10001:
    result = result + 1;
    if number_array[result]:
        count = count + 1;
print(result)
