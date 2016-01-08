var processValue = 1;
var resultNumber = 1;

for(i=1; i<=999999; i++){
  var n = i;
  var tempProcessValue = 0;
  while(true){
    if(n==1){
      break;
    }
    else if(n%2 == 0){
      n = n / 2;
    }
    else{
      n = 3*n + 1;
    }
    tempProcessValue = tempProcessValue + 1;
  }
  if(tempProcessValue > processValue){
    processValue = tempProcessValue
    resultNumber = i;
  }
}

console.log(resultNumber);
