var index = 1;
var count = 0;

function bouncy(n){
  if(n < 100){
    return false;
  }
  str = n.toString();
  var checkIncreasing = 0;
  var checkDecreasing = 0;
  for(i=0; i<str.length - 1; i++){
    if(parseInt(str.charAt(i)) <= parseInt(str.charAt(i+1))){
      checkIncreasing = checkIncreasing + 1;
    }
    if(parseInt(str.charAt(i)) >= parseInt(str.charAt(i+1))){
      checkDecreasing = checkDecreasing + 1;
    }
  }
  var returnValue = true;
  if(checkIncreasing == str.length - 1){
    returnValue = false;
  }
  if(checkDecreasing == str.length - 1){
    returnValue = false;
  }
  return returnValue;
}

while(true){
  if(bouncy(index) == true){
    count = count + 1;
  }
  if((count / index) * 100 == 99){
    break;
  }
  index = index + 1;
}

console.log(index);
