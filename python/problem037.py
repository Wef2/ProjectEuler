import math

number_array = [True] * 1000000
number_array[1] = False

for i in range(2, int(math.sqrt(1000000))):
    if number_array[i]:
        j = i + i
        while j < 1000000:
            number_array[j] = False
            j += i


def is_truncatable(n):
    str_n = str(n)
    for a in range(1, len(str_n)):
        temp_str1 = str_n[0:a]
        temp_str2 = str_n[a:len(str_n)]
        temp_value1 = int(temp_str1)
        temp_value2 = int(temp_str2)
        if not number_array[temp_value1] or not number_array[temp_value2]:
            return False

    return True


result = 0
count = 0
index = 10
while count < 11:
    if number_array[index] and is_truncatable(index):
        result += index
        count += 1
    index += 1
print(result)
