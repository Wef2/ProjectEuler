function palindrome(n){
  for(k = 0; k < (n.length / 2); k++){
    if((n.charAt(k) != n.charAt(n.length - 1 - k))){
        return false;
    }
  }
  return true;
}

function binary(n){
  var code = '';
  var value = n;

  while(true){
    if(value / 2 >= 1){
      if(value % 2 == 0){
        code = '0' + code;
      }
      else{
        code = '1' + code;
      }
      value = parseInt(value / 2);
    }
    else{
      if(value % 2 == 0){
        code = '0' + code;
      }
      else{
        code = '1' + code;
      }
      break;
    }
  }
  return code;
}


var index = 1;
var result = 0;

while(index <= 1000000){
  if(palindrome(index.toString()) == true){
    if(palindrome(binary(index)) == true){
      result = result + index;
    }
  }
  index = index + 1;
}

console.log(result);
