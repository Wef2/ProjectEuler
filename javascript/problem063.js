var numberArray;

function calculate(x, y){
    numberArray = [1];
    for(i=1; i<=y; i++){
      for(j=0; j<numberArray.length; j++){
        numberArray[j] = numberArray[j] * x;
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
}

var result = 0;

for(n=1; n<22; n++){
  for(m=1; m<10; m++){
    calculate(m, n);
    if(numberArray.length == n){
      result = result + 1;
    }
  }
}

console.log(result);
