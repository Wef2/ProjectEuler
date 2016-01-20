denominator = 1
numerator = 1

index = 0
result = 0
while index <= 1000:
    index += 1
    temp_denominator = numerator + denominator
    temp_numerator = numerator + 2 * denominator
    denominator = temp_denominator
    numerator = temp_numerator
    d_str = str(denominator)
    n_str = str(numerator)
    if len(n_str) > len(d_str):
        result += 1

print(result)
