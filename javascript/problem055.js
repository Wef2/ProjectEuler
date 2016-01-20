function isPalindrome(n){
  var str = n.toString();
  for(a = 0; a < parseInt(str.length/2) + 1; a++){
    if(str.substring(a, a+1) != str.substring(str.length - a - 1, str.length - a)){
      return false
    }
  }
  return true;
}


function getReverse(n){
    var reverse = ""
    var str = n.toString();
    for(a=0; a<str.length; a++){
        reverse += str.substring(str.length - a - 1, str.length - a);
    }
    return parseInt(reverse);
}


function isLychrel(n){
    var value = n
    var reverseValue = getReverse(value)
    var count = 1
    while(isPalindrome(value + reverseValue) == false){
        value = value + reverseValue
        reverseValue = getReverse(value)
        count += 1
        if(count == 50){
           return true;
        }
    }
    return false;
}


var result = 0
for (i=1; i<10000; i++){
    if(isLychrel(i)){
      result = result + 1;
    }
}

console.log(result)
