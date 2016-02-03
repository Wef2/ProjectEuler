List list = new ArrayList(2000000);

for (i = 2; i < Math.sqrt(2000000); i++) {
    if (list[i] == null) {
        for (j = i + i; j < 2000000; j = j + i) {
            list[j] = false;
        }
    }
}

BigInteger result = 0;
for (i = 2; i< 2000000; i++){
    if(list[i] == null){
        result = result + i;
    }
}

println(result);