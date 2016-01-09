var sum_of_the_square = 0
var root_square_of_the_sum = 0

for(i=1; i<=100; i++){
  sum_of_the_square += i * i;
  root_square_of_the_sum += i;
}
var result = root_square_of_the_sum * root_square_of_the_sum - sum_of_the_square;
console.log(result)
