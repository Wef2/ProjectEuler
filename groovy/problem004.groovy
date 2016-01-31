int result = 0;

for(i = 100; i< 1000; i++){
    for(j = 100; j< 1000; j++){
        boolean status = true;
        int value = i * j;
        String str = value.toString();
        for(k = 0; k < str.length(); k ++){
            if((str.charAt(k) != str.charAt(str.length() - 1 - k))){
                status = false;
                break;
            }
        }
        if(status == true && result < value){
            result = value;
        }
    }
}

println(result);