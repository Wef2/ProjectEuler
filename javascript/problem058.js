function isPrime(x){
  for(i=2; i<parseInt(Math.sqrt(x)); i++){
    if(x % i == 0){
      return false;
    }
  }
  return true;
}

var index = 2;
var primes = 3;
var total = 5;
while(primes / total > 0.1){
  index = index + 1;
  var number1 = (2*index - 1)*(2*index - 1) - 6*(index - 1);
  var number2 = (2*index - 1)*(2*index - 1) - 4*(index - 1);
  var number3 = (2*index - 1)*(2*index - 1) - 2*(index - 1);
    if(isPrime(number1)){
      primes = primes + 1;
    }
    if(isPrime(number2)){
      primes = primes + 1;
    }
    if(isPrime(number3)){
      primes = primes + 1;
    }
  total = total + 4;
}

var result = 2*index - 1;
console.log(result);
