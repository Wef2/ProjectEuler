def count_rectangles(x, y):
    count = 0
    for i in range(1, x + 1):
        for j in range(1, y + 1):
            count += (x + 1 - i) * (y + 1 - j)
    return count

nearest_x = 0
nearest_y = 0
nearest_value = 2000000

for a in range(1, 100):
    for b in range(1, 100):
        value = count_rectangles(a, b) - 2000000
        if value < 0:
            value *= -1
        if value < nearest_value:
            nearest_value = value
            nearest_x = a
            nearest_y = b

result = nearest_x * nearest_y
print(result)