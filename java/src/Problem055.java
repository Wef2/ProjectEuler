import javafx.util.converter.BigIntegerStringConverter;

import java.math.BigInteger;

/**
 * Created by BK on 2016-04-03.
 */
public class Problem055 {

    private BigIntegerStringConverter bigIntegerStringConverter = new BigIntegerStringConverter();

    public static void main(String args[]) {
        Problem055 problem = new Problem055();
        System.out.println(problem.result());
    }

    int result() {
        int value = 0;
        for (int i = 1; i <= 10000; i++) {
            if (isLychrel(BigInteger.valueOf(i))) {
                value = value + 1;
            }
        }
        return value;
    }

    boolean isPalindrome(BigInteger n) {
        String str = n.toString();
        for (int a = 0; a < (str.length() / 2) + 1; a++) {
            if (Integer.parseInt(str.substring(a, a + 1)) != Integer.parseInt(str.substring(str.length() - a - 1, str.length() - a))) {
                return false;
            }
        }
        return true;
    }

    boolean isLychrel(BigInteger n) {
        BigInteger original = n;
        BigInteger reverse = getReverse(n);
        int count = 1;
        while(isPalindrome(original.add(reverse)) == false){
            original = original.add(reverse);
            reverse = getReverse(original);
            count = count + 1;
            if(count == 50){
                return true;
            }
        }
        return false;
    }

    BigInteger getReverse(BigInteger n) {
        String str = n.toString();
        String reverseString = "";
        for (int a = str.length(); a > 0; a--) {
            reverseString = reverseString + str.substring(a - 1, a);
        }
        return bigIntegerStringConverter.fromString(reverseString);
    }


}
