var primeNumbers = [2];

function isPrimeNumber(n){

    for(i in primeNumbers){
      if(n % primeNumbers[i] == 0){
        return false;
      }
    }

    return true;
}

var result = 2;
var index = 3;
while(index < Math.sqrt(2000000)){
  if(isPrimeNumber(index)){
    primeNumbers.push(index);
    result = result + index;
  }
  index = index + 2;
}

while(index < 2000000){
  if(isPrimeNumber(index)){
    result = result + index;
  }
  index = index + 2;
}

console.log(result);
