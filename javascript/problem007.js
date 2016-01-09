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

var index = 0;

while(true){
  setPrimeNumber(index);
  if(index > 10000){
    break;
  }
  index = index + 1;
}

result = primeNumbers[10000];

console.log(result);
