import java.math.BigInteger;

/**
 * Created by 김 on 2016-02-05.
 */
public class Problem053 {

    BigInteger factorial(int x) {
        BigInteger value = new BigInteger("1");
        for (int i = 1; i <= x; i++) {
            value = value.multiply(BigInteger.valueOf(i));
        }
        return value;
    }

    BigInteger c(int n, int r) {
        BigInteger value = new BigInteger("1");
        value = value.multiply(factorial(n));
        value = value.divide(factorial(r));
        value = value.divide(factorial(n - r));
        return value;
    }

    int result() {
        int count = 0;
        for (int a = 10; a <= 100; a++) {
            BigInteger num = new BigInteger("1000000");
            for (int b = 1; b <= a / 2; b++) {
                if (c(a, b).compareTo(num) == 1) {
                    count = count + 2;
                }
            }
            if (a % 2 == 0) {
                if (c(a, a / 2).compareTo(num) == 1) {
                    count = count - 1;
                }
            }
        }
        return count;
    }

    public static void main(String args[]) {
        Problem053 problem = new Problem053();
        System.out.println(problem.result());
    }
}
