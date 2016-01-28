var p_numerator = [1];
var p_denominator = [0];
var numerator = [2];
var denominator = [1];

function setNumerator(n){
  for(i=0; i<numerator.length; i++){
    if(p_numerator[i] == undefined){
      numerator[i] = n*numerator[i];
    }
    else{
      numerator[i] = p_numerator[i] + n*numerator[i];
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

function setDenominator(n){
    for(i=0; i<denominator.length; i++){
      if(p_denominator[i] == undefined){
        denominator[i] = n * denominator[i];
      }
      else{
        denominator[i] = p_denominator[i] + n * denominator[i];
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

var index = 1;

while(index < 100){
  var value = 1;
  if(index % 3 == 2){
    value = (parseInt(index / 3) + 1) * 2
  }
  var tempNumerator = numerator.slice(0);
  var tempDenominator = denominator.slice(0);
  setDenominator(value);
  setNumerator(value);
  p_numerator = tempNumerator.slice(0);
  p_denominator = tempDenominator.slice(0);
  index = index + 1;
}

var result = 0;

for(i in numerator){
  result += numerator[i];
}

console.log(result);
