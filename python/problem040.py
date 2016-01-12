index = 1
product_position = 1
total_length = 0
result = 1

while True:
    for i in str(index):
        total_length += 1
        if total_length == product_position:
            result *= int(i)
            product_position *= 10
    if product_position == 10000000:
        break
    index += 1

print(result)
