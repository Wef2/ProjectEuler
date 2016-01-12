result = 1
for i in range(2, 502):
    result += (2 * i - 1)*(2 * i - 1)
    result += (2 * i - 1)*(2 * i - 1) - 2*(i-1)
    result += (2 * i - 1)*(2 * i - 1) - 4*(i-1)
    result += (2 * i - 1)*(2 * i - 1) - 6*(i-1)

print(result)
