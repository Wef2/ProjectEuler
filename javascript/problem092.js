function getValue(n){
  var str = n.toString();
  var value = 0;
  for(a in str){
    value = value + parseInt(str[a]) * parseInt(str[a]);
  }
  return value;
}

function checkNumber(number){
  return number == 89;
}

var numberArray = Array(10000000);

for(i=1; i<10000000; i++){
  var tempArray = [];
  if(numberArray[i] != 89 && numberArray[i] != 1){
    var number = i;
    tempArray.push(number);
    while(number != 89 && number != 1){
      number = getValue(number);
      if(numberArray[number] != 89 && numberArray[number] != 1){
        tempArray.push(number);
      }
      else{
        number = numberArray[number];
      }
    }
    if(number == 1){
      for(j in tempArray){
        numberArray[tempArray[j]] = 1;
      }
    }
    else{
      for(j in tempArray){
        numberArray[tempArray[j]] = 89;
      }
    }
  }
}

var result = numberArray.filter(checkNumber).length;

console.log(result);
