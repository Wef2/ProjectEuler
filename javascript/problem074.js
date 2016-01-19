var factorial = [1, 1];

for(a=2; a<10; a++){
  factorial[a] = factorial[a-1] * a
}

var loopArray = [];

function initloopArray(){
  loopArray = [];
}

function sum(number){
  var value = 0;
  var str = number.toString();
  for(i=0; i<str.length; i++){
    value = value + factorial[parseInt(str[i])];
  }
  return value;
}

function nonRepeatingTerms(n){
  var count = 1;
  initloopArray();
  loopArray.push(n);
  var currentNumber = sum(loopArray[0]);
  while(loopArray.indexOf(currentNumber) == -1){
    loopArray.push(currentNumber);
    count = count + 1;
    currentNumber = sum(loopArray[count-1]);
  }
  return count;
}

var result = 0;
for(k=1; k<=1000000; k++){
  if(nonRepeatingTerms(k) == 60){
    result = result + 1;
  };
}

console.log(result);
