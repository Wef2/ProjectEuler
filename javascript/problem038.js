function toNine(n){
  var i = 1;
  var str = "";
  while(str.length < 9){
    var number = n * i;
    str = str + number;
    i = i + 1;
  }
  if(str.length != 9){
    return false;
  }
  else{
    return str;
  }
}

var pandigitalArray = ['1','2','3','4','5','6','7','8','9'];
function isPandigital(m){
  var returnValue = false;
  if(pandigitalArray.toString() == m.split("").sort().toString()){
    return returnValue = true;
  }
  return returnValue;
}

var index = 1;
var maxPandigital = 0;
while(index < 10000){
  var nine = toNine(index);
  if(nine != false){
    if(isPandigital(nine)){
      var pandigital = parseInt(nine);
      if(maxPandigital < pandigital){
        maxPandigital = pandigital;
      }
    };
  }
  index = index + 1;
}
var result = maxPandigital;
console.log(result);
