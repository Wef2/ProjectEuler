var value1 = [1];
var value2 = [1];
var numberArray = [0];

function getFibonacci(){
  for(i=0; i<value2.length; i++){
    if(value1[i] == undefined){
      numberArray[i] = value2[i];
    }else{
      numberArray[i] = value1[i] + value2[i];
    }
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
  value1 = value2.slice(0);
  value2 = numberArray.slice(0);
}

var index = 2;
var len = 0;
while(len < 1000){
  index = index + 1;
  getFibonacci();
  len = numberArray.length;
}
var result = index;
console.log(result);
