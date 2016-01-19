factorial = [1, 1]

for a in range(2, 10):
    factorial.append(factorial[a - 1] * a)

loop_array = []


def get_sum(number):
    value = 0
    for i in str(number):
        value += factorial[int(i)]
    return value


def non_repeating_terms(n):
    count = 1
    loop_array.clear()
    loop_array.append(n)
    current_number = get_sum(loop_array[0])
    while loop_array.count(current_number) == 0:
        loop_array.append(current_number)
        count += 1
        current_number = get_sum(loop_array[count - 1])
    return count


result = 0
for k in range(1, 1000001):
    if non_repeating_terms(k) == 60:
        result += 1

print(result)
