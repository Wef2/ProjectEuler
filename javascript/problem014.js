var processValue = 1;
var resultNumber = 1;
var array = new Array();

for(i=1; i<=999999; i++){
  var number = i;
  var tempValue = 0;
  while(number!=1){
    if(number % 2 == 0){
      number = number / 2;
    }
    else{
      number = 3*number + 1;
    }
    tempValue = tempValue + 1;
    if(array[number] != undefined){
      tempValue = tempValue + array[number];
      break;
    }
  }
  array[i] = tempValue;
  if(tempValue > processValue){
    processValue = tempValue;
    resultNumber = i;
  }
}

console.log(resultNumber);
