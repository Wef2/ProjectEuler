var primeNumbers = [2];
var currentNumber = 3;

function setPrimeNumber(n){

  while(true){
    var count = 0;

    primeNumbers.push(currentNumber);

    for(i in primeNumbers){
      if(count > 1){
        break;
      }
      if(currentNumber % i == 0){
        count = count + 1;
      }
    }

    if(count == 1){
      currentNumber = currentNumber + 1;
      break;
    }
    else{
      primeNumbers.pop();
      currentNumber = currentNumber + 1;
    }
  }
}

index = 0;

var value = 600851475143;
var result;

while(true){
  if(value % primeNumbers[index] == 0){
    value = value / primeNumbers[index];
    if(value == 1){
      result = primeNumbers[index];
      break;
    }
  }
  else{
    index = index + 1;
    setPrimeNumber(index);
  }
}

console.log(result);
