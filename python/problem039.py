def triangle(p):
    number = 0

    for a in range(1, p - 669):
        for b in range(1, p - 335):
            c = p - a - b
            if a < b < c:
                if c * c == (a * a + b * b):
                    number += 1

    return number


index = 3
maxvalue = 0
result = 0
while index <= 1000:
    if triangle(index) > maxvalue:
        maxvalue = triangle(index)
        result = index
    index += 1

print(result)
