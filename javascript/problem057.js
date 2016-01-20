var denominator = [1];
var numerator = [1];
var tempNumerator = [1];
var tempDenominator = [1];

function setNumerator(){
  for(i=0; i<numerator.length; i++){
    if(tempDenominator[i] == undefined){
      numerator[i] = tempNumerator[i];
    }
    else{
      numerator[i] = tempNumerator[i] + 2*tempDenominator[i];
    }
  }

    for(i=0; i<numerator.length; i++){
      if(numerator[i] >= 10){
        if(numerator[i+1] == undefined){
          numerator[i+1] = parseInt(numerator[i] / 10);
        }
        else{
          numerator[i+1] += parseInt(numerator[i] / 10);
        }
        numerator[i] = numerator[i] % 10;
      }
    }
}

function setDenominator(){
    for(i=0; i<numerator.length; i++){
      if(tempDenominator[i] == undefined){
        denominator[i] = tempNumerator[i];
      }
      else{
        denominator[i] = tempNumerator[i] + tempDenominator[i];
      }
    }
    for(i=0; i<denominator.length; i++){
      if(denominator[i] >= 10){
        if(denominator[i+1] == undefined){
          denominator[i+1] = parseInt(denominator[i] / 10);
        }
        else{
          denominator[i+1] += parseInt(denominator[i] / 10);
        }
        denominator[i] = denominator[i] % 10;
      }
    }
}

var index = 0;
var result = 0;
while(index <= 1000){
  index = index + 1;
  var tempDenominator = denominator.slice(0);
  var tempNumerator = numerator.slice(0);
  setDenominator();
  setNumerator();
  if(numerator.length > denominator.length){
    result = result + 1;
  }
}

console.log(result);
