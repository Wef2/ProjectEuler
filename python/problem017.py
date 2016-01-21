def one(n):
    if n == 1:
        return "one"
    elif n == 2:
        return "two"
    elif n == 3:
        return "three"
    elif n == 4:
        return "four"
    elif n == 5:
        return "five"
    elif n == 6:
        return "six"
    elif n == 7:
        return "seven"
    elif n == 8:
        return "eight"
    elif n == 9:
        return "nine"


def ten(n):
    if n == 10:
        return "one"
    elif n == 11:
        return "eleven"
    elif n == 12:
        return "twelve"
    elif n == 13:
        return "thirteen"
    elif n == 14:
        return "fourteen"
    elif n == 15:
        return "fifteen"
    elif n == 16:
        return "sixteen"
    elif n == 17:
        return "seventeen"
    elif n == 18:
        return "eighteen"
    elif n == 19:
        return "nineteen"


def ty(n):
    if n == 2:
        return "twenty"
    elif n == 3:
        return "thirty"
    elif n == 4:
        return "forty"
    elif n == 5:
        return "fifty"
    elif n == 6:
        return "sixty"
    elif n == 7:
        return "seventy"
    elif n == 8:
        return "eighty"
    elif n == 9:
        return "ninety"


def to_string(n):
    return_str = ""
    if 1 <= n <= 9:
        return_str = one(n)
    elif 10 <= n <= 19:
        return_str = ten(n % 100)
    elif 20 <= n <= 99:
        if n % 10 == 0:
            return_str = ty(int(int(n % 100) / 10))
        else:
            return_str = ty(int(int(n % 100) / 10)) + one(int(int(n % 100) % 10))
    return return_str


result = 0
for i in range(1, 1001):
    num_str = ""
    number = i
    if 1 <= number < 100:
        num_str += to_string(number)
    elif 100 <= number < 1000:
        num_str = one(int(number / 100)) + "hundred"
        number -= int(number / 100) * 100
        if number != 0:
            num_str += "and" + to_string(number)
    elif number == 1000:
        num_str = "onethousand"
    result += len(num_str)

print(result)