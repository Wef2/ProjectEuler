def is_palindrome(n):
    for a in range(0, int(len(str(n)) / 2) + 1):
        if str(n)[a:a + 1] != str(n)[len(str(n)) - a - 1:len(str(n)) - a]:
            return False
    return True


def get_reverse(n):
    reverse = ""
    for a in range(0, len(str(n))):
        reverse += str(n)[len(str(n)) - a - 1:len(str(n)) - a]
    return int(reverse)


def is_lychrel(n):
    value = n
    reverse_value = get_reverse(value)
    count = 1
    while is_palindrome(value + reverse_value) is False:
        value += reverse_value
        reverse_value = get_reverse(value)
        count += 1
        if count == 50:
            return True
    return False


result = 0
for i in range(1, 10000):
    if is_lychrel(i):
        result += 1
print(result)