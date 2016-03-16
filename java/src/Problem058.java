/**
 * Created by BK on 2016-03-16.
 */
public class Problem058 {

    int result() {
        int index = 2;
        int primes = 3;
        int total = 5;
        while ((double)primes / (double)total > 0.1) {
            index = index + 1;
            int number1 = (2 * index - 1) * (2 * index - 1) - 6 * (index - 1);
            int number2 = (2 * index - 1) * (2 * index - 1) - 4 * (index - 1);
            int number3 = (2 * index - 1) * (2 * index - 1) - 2 * (index - 1);
            if (isPrime(number1)) {
                primes = primes + 1;
            }
            if (isPrime(number2)) {
                primes = primes + 1;
            }
            if (isPrime(number3)) {
                primes = primes + 1;
            }
            total = total + 4;
        }
        return 2 * index - 1;
    }

    boolean isPrime(int x) {
        for (int i = 2; i < Math.sqrt(x); i++) {
            if (x % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String args[]) {
        Problem058 problem = new Problem058();
        System.out.println(problem.result());
    }
}