function triangle(p){
  var number = 0;

  for(a=1; a<=p-668; a++){
    for(b=1; b<=p-335; b++){
      var c = p - a - b;
      if(a < b && b < c){
          if(c*c == (a*a + b*b)){
            number = number + 1;
          }
      }
    }
  }

  return number;
}

var maxvalue = 0;
var result = 0;
for(i = 12; i <= 1000; i++){
  if(triangle(i) > maxvalue){
    maxvalue = triangle(i);
    result = i;
  }
}

console.log(result);
