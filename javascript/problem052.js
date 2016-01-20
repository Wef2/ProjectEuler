function check(n){
  var indexArray = [];
  var str = n.toString();
  for(a=0; a<str.length; a++){
    indexArray.push(str[a]);
  }
  indexArray.sort();

  for(i=2; i<=6; i++){
    var tempArray = [];
    var tempValue = n * i;
    var tempStr = tempValue.toString();
    for(j=0; j<tempStr.length; j++){
      tempArray.push(tempStr[j])
    }
    tempArray.sort();
    if(indexArray.toString() != tempArray.toString()){
      return false;
    }
  }
  return true;
}

var index = 0;

while(true){
  index = index + 1;
  if(check(index)){
    break;
  }
}

var result = index;
console.log(result);
