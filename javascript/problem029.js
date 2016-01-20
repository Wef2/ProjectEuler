var numArray = [];
var tempArray = [1];

function getPow(x, y){
  tempArray = [1];
  var str = "";
    for(i=1; i<=y; i++){
      for(j=0; j<tempArray.length; j++){
        tempArray[j] = tempArray[j] * x;
      }
      for(j=0; j<tempArray.length; j++){
        if(tempArray[j] >= 10){
          if(tempArray[j+1] == undefined){
            tempArray[j+1] = parseInt(tempArray[j] / 10);
          }
          else{
            tempArray[j+1] += parseInt(tempArray[j] / 10);
          }
          tempArray[j] = tempArray[j] % 10;
        }
      }
    }
    for(k=0; k<tempArray.length; k++){
      str = str + tempArray[tempArray.length - k - 1];
    }
  return str;
}

for(a=2; a<=100; a++){
    for(b=2; b<=100; b++){
        var value = getPow(a, b)
        if(numArray.indexOf(value) == -1){
          numArray.push(value)
        }
    }
}

result = numArray.length;
console.log(result)
