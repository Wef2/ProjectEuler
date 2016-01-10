day_of_the_week = 0
day = 1
month = 1
year = 1901
result = 0

while True:
    if day == 1 and day_of_the_week == 0:
        result += 1

    day += 1
    day_of_the_week += 1
    day_of_the_week %= 7

    if month in [1, 3, 5, 7, 8, 10]:
        if day == 32:
            month += 1
            day = 1
    elif month in [4, 6, 9, 11]:
        if day == 31:
            month += 1
            day = 1
    elif month in [2]:
        if year % 4 == 0 and year % 400 != 0 and year % 100 == 0:
            if day == 29:
                month += 1
                day = 1
        elif year % 4 == 0:
            if day == 30:
                month += 1
                day = 1
        else:
            if day == 29:
                month += 1
                day = 1
    else:
        if day == 32:
            year += 1
            month = 1
            day = 1

    if year == 2001:
        break

print(result)
