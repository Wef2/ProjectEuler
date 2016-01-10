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

var index = 3;
var maxvalue = 0;
var result = 0;
while(index <= 1000){
  if(triangle(index) > maxvalue){
    maxvalue = triangle(index);
    result = index;
  }
  index = index + 1;
}

console.log(result);
