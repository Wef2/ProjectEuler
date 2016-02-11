function toNine(n){
  var a = 1;
  var str = "";
  while(str.length < 9){
    var number = n * a;
    str = str + number;
    a = a + 1;
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

var maxPandigital = 0;
for(i = 1; i < 10000; i++){
  var nine = toNine(i);
  if(nine != false){
    if(isPandigital(nine)){
      var pandigital = parseInt(nine);
      if(maxPandigital < pandigital){
        maxPandigital = pandigital;
      }
    }
  }
}

var result = maxPandigital;
console.log(result);
