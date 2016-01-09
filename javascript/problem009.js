var result;

for(a=1;a<=998;a++){
  for(b=1;b<=999-a;b++){
      var c = 1000 - a - b;
      if(a*a + b*b == c*c){
        result = a * b * c;
      }
  }
}

console.log(result);
