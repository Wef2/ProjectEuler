var primeNumbers = [2];
var currentNumber = 3;

function isPrime(n){
  for(a in primeNumbers){
    if(n % primeNumbers[a] == 0){
      return false;
    }
  }
  return true;
}

index = 0;

var value = 600851475143;
while(value > 1){
  if(value % primeNumbers[index] == 0){
    value = value / primeNumbers[index];
  }
  else{
    if(isPrime(currentNumber)){
      primeNumbers.push(currentNumber);
      index = index + 1;
    }
    currentNumber = currentNumber + 1;
  }
}
var result = primeNumbers[index];
console.log(result);
