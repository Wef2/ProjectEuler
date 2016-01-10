index = 1
product_position = 1
total_length = 0
result = 1

while True:
    str_index = str(index)
    for i in range(0, len(str_index)):
        total_length += 1
        if total_length == product_position:
            result *= int(str_index[i:i + 1])
            product_position *= 10
    if product_position == 10000000:
        break
    index += 1

print(result)
