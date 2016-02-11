def triangle(p):
    number = 0

    for a in range(1, p - 669):
        for b in range(1, p - 335):
            c = p - a - b
            if a < b < c:
                if c * c == (a * a + b * b):
                    number += 1

    return number



maxvalue = 0
result = 0
for i in range(12, 1001):
    if triangle(i) > maxvalue:
        maxvalue = triangle(i)
        result = i


print(result)
