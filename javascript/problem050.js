var array = new Array(1000000);

for(i=2; i<Math.sqrt(100000); i++){
  if(array[i] == undefined){
    for(j=i+i; j<1000000; j = j + i){
      array[j] = false;
    }
  }
}

var primeNumbers = [];
for(i=2; i<1000000; i++){
  if(array[i] == undefined){
    primeNumbers.push(i);
  }
}

var maxCount = 0;
var result = 0;
for(a in primeNumbers){
  var value = 0;
  var count = 0;
  for(b = a; b < primeNumbers.length; b++){
    count = count + 1;
    value = value + primeNumbers[b];
    if(value > 1000000){
      break;
    }
    if(primeNumbers.indexOf(value) != -1){
      if(maxCount < count){
        maxCount = count;
        result = value;
      }
    }
  }

  var temp = parseInt(a);
  var check = 0;
  for(x=a; x<temp+maxCount; x++){
    check += primeNumbers[x]
  }
  if(check > 1000000){
    break;
  }
}

console.log(result);
