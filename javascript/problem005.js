var primeNumbers = [2];
var maxValues = [];
var tempValues = [];
function isPrime(n){

  for(a in primeNumbers){
    if(n % primeNumbers[a] == 0){
      return false;
    }
  }
  return true;
}

for(i=3; i<=20; i++){
  if(isPrime(i)){
    primeNumbers.push(i);
  };
}

for(a in primeNumbers){
  maxValues.push(0);
  tempValues.push(0);
}

function initTempValues(){
  for(a in tempValues){
    tempValues[a] = 0;
  }
}

for(x=2; x<=20; x++){
  initTempValues();
  var number = x;
  var pointer = 0;
  while(number > 1){
    if(number % primeNumbers[pointer] == 0){
      number = number / primeNumbers[pointer];
      tempValues[pointer] = tempValues[pointer] + 1;
    }
    else{
      pointer = pointer + 1;
    }
  }
  for(y = 0; y < tempValues.length; y++){
    if(maxValues[y] < tempValues[y]){
      maxValues[y] = tempValues[y];
    }
  }
}

function square(x, y){
  var value = 1;
  for(a=0; a<y; a++){
    value = value * x;
  }
  return value;
}

var result = 1;
for(i=0; i<maxValues.length; i++){
  result = result * square(primeNumbers[i], maxValues[i]);
}
console.log(result);
