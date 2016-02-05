import java.util.ArrayList;
import java.util.List;

/**
 * Created by 김 on 2016-02-05.
 */
public class Problem003 {

    long value = 600851475143L;
    List<Integer> primeNumbers = new ArrayList();
    int currentNumber = 3;

    boolean isPrime(int n) {
        for (int a = 0; a < primeNumbers.size(); a++) {
            if (n % primeNumbers.get(a) == 0) {
                return false;
            }
        }
        return true;
    }

    int result() {
        int index = 0;
        primeNumbers.add(2);
        while (value > 1) {
            if (value % primeNumbers.get(index) == 0) {
                value = value / primeNumbers.get(index);
            } else {
                if (isPrime(currentNumber)) {
                    primeNumbers.add(currentNumber);
                    index = index + 1;
                }
                currentNumber = currentNumber + 1;
            }
        }
        int resultValue = primeNumbers.get(index);
        return resultValue;
    }

    public static void main(String args[]) {
        Problem003 problem = new Problem003();
        System.out.println(problem.result());
    }
}
