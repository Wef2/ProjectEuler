var numberArray = [1];

function calculate(a){
    for(j=0; j<numberArray.length; j++){
      numberArray[j] = numberArray[j] * a;
    }
    for(j=0; j<numberArray.length; j++){
      if(numberArray[j] >= 10){
        if(numberArray[j+1] == undefined){
          numberArray[j+1] = parseInt(numberArray[j] / 10);
        }
        else{
          numberArray[j+1] += parseInt(numberArray[j] / 10);
        }
        numberArray[j] = numberArray[j] % 10;
      }
    }
}

function getValue(){
  var value = 0;
  for(i=0; i<numberArray.length; i++){
    value = value + numberArray[i];
  }
  return value;
}


for(a=2; a<100; a++){
  calculate(a);
}

var result = getValue();

console.log(result);
