process_value = 1
result = 1

for i in range(1, 1000000):
    n = i
    temp_process_value = 0
    while True:
        if n == 1:
            break
        elif n % 2 == 0:
            n = (n / 2)
        else:
            n = 3 * n + 1
        temp_process_value += 1
    if temp_process_value > process_value:
        process_value = temp_process_value
        result = i

print(result)
