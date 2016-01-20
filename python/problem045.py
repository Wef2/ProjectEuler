triangular_number = 0
pentagonal_number = 0
hexagonal_number = 0


def get_triangular(n):
    return (n * n + n) / 2


def get_pentagonal(n):
    return (3 * n * n - n) / 2


def get_hexagonal(n):
    return 2 * n * n - n


index_t = 1
index_p = 1
index_h = 1
count_number = 0
while count_number < 3:
    triangular_number = get_triangular(index_t)
    pentagonal_number = get_pentagonal(index_p)
    hexagonal_number = get_hexagonal(index_h)
    while pentagonal_number != hexagonal_number:
        if pentagonal_number > hexagonal_number:
            index_h += 1
            hexagonal_number = get_hexagonal(index_h)
        elif hexagonal_number > pentagonal_number:
            index_p += 1
            pentagonal_number = get_pentagonal(index_p)
    if triangular_number < pentagonal_number:
        index_t += 1
        triangular_number = get_triangular(index_t)
    elif triangular_number == pentagonal_number:
        count_number += 1
        index_t += 1
        index_p += 1
        index_h += 1
    else:
        index_t += 1
        index_p += 1
        index_h += 1
    
result = triangular_number
print(result)
