function one(n){
  if(n==1){
    return "one";
  }
  else if(n==2){
    return "two";
  }
  else if(n==3){
    return "three";
  }
  else if(n==4){
    return "four";
  }
  else if(n==5){
    return "five";
  }
  else if(n==6){
    return "six";
  }
  else if(n==7){
    return "seven";
  }
  else if(n==8){
    return "eight";
  }
  else if(n==9){
    return "nine";
  }
}

function ten(n){
  if(n==10){
    return "ten";
  }
  else if(n==11){
    return "eleven";
  }
  else if(n==12){
    return "twelve";
  }
  else if(n==13){
    return "thirteen";
  }
  else if(n==14){
    return "fourteen";
  }
  else if(n==15){
    return "fifteen";
  }
  else if(n==16){
    return "sixteen";
  }
  else if(n==17){
    return "seventeen";
  }
  else if(n==18){
    return "eighteen";
  }
  else if(n==19){
    return "nineteen";
  }
}

function ty(n){
  if(n==2){
    return "twenty";
  }
  else if(n==3){
    return "thirty";
  }
  else if(n==4){
    return "forty";
  }
  else if(n==5){
    return "fifty";
  }
  else if(n==6){
    return "sixty";
  }
  else if(n==7){
    return "seventy";
  }
  else if(n==8){
    return "eighty";
  }
  else if(n==9){
    return "ninety";
  }
}

function toStr(n){
  var returnStr;
  if(n >= 1 && n <= 9){
    returnStr = one(n);
  }
  else if(n >= 10 && n <= 19){
    returnStr = ten(n % 100)
  }
  else if(n >= 20 && n <= 99){
    if(n % 10 == 0){
      returnStr = ty(parseInt(parseInt(n % 100) / 10));
    }
    else{
      returnStr = ty(parseInt(parseInt(n % 100) / 10))+one(parseInt(parseInt(n % 100) % 10));
    }
  }
  return returnStr;
}

var result = 0;
for(i=1;i<=1000;i++){
  var str = "";
  var number = i;
  if(number >= 1 && number < 100){
    str = str + toStr(number);
  }
  else if(number >= 100 && number < 1000){
    str = one(parseInt(number / 100))+"hundred";
    number = number - parseInt(number / 100) * 100;
    if(number != 0){
      str = str + "and" + toStr(number);
    }
  }
  else if(number == 1000){
      str ="onethousand";
  }
  result += str.length;
}

console.log(result);
