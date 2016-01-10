def palindrome(n):
    for k in range(0, int(len(n) / 2)):
        if n[k:k + 1] != n[len(n) - k - 1:len(n) - k]:
            return False
    return True


def binary(n):
    code = ''
    value = n

    while True:
        if (value / 2) >= 1:
            if (value % 2) == 0:
                code = '0' + code
            else:
                code = '1' + code
            value = int(value / 2)
        else:
            if (value % 2) == 0:
                code = '0' + code
            else:
                code = '1' + code
            break
    return code


index = 1
result = 0

while index <= 1000000:
    if palindrome(str(index)) is True:
        if palindrome(binary(index)) is True:
            result += index
    index += 1

print(result)
