def get_value(n):
    str_n = str(n)
    value = 0
    for a in str_n:
        value += int(a) ** 2
    return value

number_array = [0]*10000000

for i in range(1, 10000000):
    temp_array = []
    if number_array[i] != 89 and number_array[i] != 1:
        number = i
        temp_array.append(number)
        while number != 89 and number != 1:
            number = get_value(number)
            if number_array[number] != 89 and number_array[number] != 1:
                temp_array.append(number)
            else:
                number = number_array[number]
            if number == 1:
                for j in temp_array:
                    number_array[j] = 1
            else:
                for j in temp_array:
                    number_array[j] = 89

result = number_array.count(89)
print(result)
