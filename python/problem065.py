def get_den(den, p_den, n):
    den = p_den + n * den
    return den


def get_num(num, p_num, n):
    num = p_num + n * num
    return num


p_numerator = 1
p_denominator = 0
numerator = 2
denominator = 1
index = 1
result = 0

while index < 100:
    value = 1
    if index % 3 == 2:
        value = (int(index / 3) + 1) * 2
    temp_denominator = denominator
    temp_numerator = numerator
    denominator = get_den(denominator, p_denominator, value)
    numerator = get_num(numerator, p_numerator, value)
    p_denominator = temp_denominator
    p_numerator = temp_numerator
    index += 1

for i in str(numerator):
    result += int(i)

print(result)
