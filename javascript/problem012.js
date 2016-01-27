var primeNumbers = [2];
var tempValues = [0];

function isPrime(n){
  for(a in primeNumbers){
    if(n % primeNumbers[a] == 0){
      return false;
    }
  }
  return true;
}

function initTempValues(){
  for(a in tempValues){
    tempValues[a] = 0;
  }
}

function getNumberOfDivisors(x, y){
  initTempValues();
  var numberOfDivisors = 1;
  var number1 = x;
  var number2 = y;
  var pointer1 = 0;
  var pointer2 = 0;
  while(number1 > 1){
    if(number1 % primeNumbers[pointer1] == 0){
      number1 = number1 / primeNumbers[pointer1];
      tempValues[pointer1] = tempValues[pointer1] + 1;
    }
    else{
      pointer1 = pointer1 + 1;
    }
  }
  while(number2 > 1){
    if(number2 % primeNumbers[pointer2] == 0){
      number2 = number2 / primeNumbers[pointer2];
      tempValues[pointer2] = tempValues[pointer2] + 1;
    }
    else{
      pointer2 = pointer2 + 1;
    }
  }
  for(y = 0; y < tempValues.length; y++){
      numberOfDivisors = numberOfDivisors * (tempValues[y] + 1);
  }
  return numberOfDivisors;
}

var index = 2;
var checkPoint = 3;
var result;

while(true){
  var n1;
  var n2;
  var bigNumber;
  if(index % 2 == 1){
    n1 = index;
    n2 = (index + 1) / 2;
    bigNumber = n1;
  }
  else{
    n1 = index / 2;
    n2 = index + 1
    bigNumber = n2;
  }
  for(i=checkPoint; i<=bigNumber; i++){
    if(isPrime(i)){
      primeNumbers.push(i);
      tempValues.push(0);
    }
  }
  checkPoint = bigNumber;
  index = index + 1;
  if(getNumberOfDivisors(n1, n2)  > 500){
    result = n1 * n2;
    break;
  }
}

console.log(result);
