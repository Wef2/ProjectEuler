num_array = []

for a in range(2, 101):
    for b in range(2, 101):
        value = a ** b
        if num_array.count(value) == 0:
            num_array.append(value)

result = len(num_array)
print(result)