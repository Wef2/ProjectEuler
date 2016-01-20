def check(n):
    index_array = []
    for a in str(n):
        index_array.append(a)
    index_array.sort()

    for i in range(2, 7):
        temp_array = []
        temp_value = n * i
        for j in str(temp_value):
            temp_array.append(j)
        temp_array.sort()
        if str(index_array) != str(temp_array):
            return False
    return True


index = 0

while True:
    index += 1
    if check(index) is True:
        break

result = index
print(result)
