index = 1
count = 0


def bouncy(n):
    if n < 100:
        return False
    str_n = str(n)
    check_increasing = 0
    check_decreasing = 0
    for i in range(0, len(str_n) - 1):
        if int(str_n[i:i + 1]) <= int(str_n[i + 1:i + 2]):
            check_increasing += 1
        if int(str_n[i:i + 1]) >= int(str_n[i + 1:i + 2]):
            check_decreasing += 1
    return_val = True
    if check_increasing == len(str_n) - 1:
        return_val = False
    if check_decreasing == len(str_n) - 1:
        return_val = False
    return return_val


while True:
    if bouncy(index) is True:
        count += 1
    if (count / index) * 100 == 99:
        break
    index += 1

print(index)
