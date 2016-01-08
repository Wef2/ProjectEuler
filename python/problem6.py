sum_of_the_square = 0
root_square_of_the_sum = 0

for i in range(101):
    sum_of_the_square += i * i
    root_square_of_the_sum += i

result = root_square_of_the_sum * root_square_of_the_sum - sum_of_the_square
print(result)
