List primeNumbers = [2]
int currentNumber = 3

boolean isPrime(List list, n) {
    for (int a = 0; a < list.size(); a++) {
        if (n % list[a] == 0) {
            return false;
        }
    }
    return true;
}

int index = 0;
BigInteger value = 600851475143;
while (value > 1) {
    if (value % primeNumbers[index] == 0) {
        value /= primeNumbers[index];
    } else {
        if (isPrime(primeNumbers, currentNumber)) {
            primeNumbers.add(currentNumber);
            index += 1;
        }
        currentNumber += 1;
    }
}
int result = primeNumbers[index];
println(result);
