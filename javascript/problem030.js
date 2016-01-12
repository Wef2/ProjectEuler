var result = 0;

for(i=2; i<=354294; i++){
  var str = i.toString();
  var value = 0;
  for(a=0; a<str.length; a++){
    var num = parseInt(str.charAt(a));
    var fiveTime = num*num*num*num*num;
    value = value + fiveTime;
  }
  if(value == i){
    result = result + i;
  }
}

console.log(result);
