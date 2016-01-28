List fibonacci = [1, 1];

int result = 0;
int index = 1;

while (fibonacci[index] < 4000000) {
    fibonacci.push(fibonacci[index]+fibonacci[index-1]);
    if (fibonacci[index] % 2 == 0) {
        result = result + fibonacci[index];
    }
    index = index + 1;
}

println(result)