import java.math.BigInteger;

/**
 * Created by BK on 2016-03-16.
 */
public class Problem056 {

    int calculate(int a, int b){
        int sum = 0;
        BigInteger number = BigInteger.ONE;
        for(int i = 1; i <= b; i++){
            number = number.multiply(BigInteger.valueOf(a));
        }
        String numberStr = number.toString();
        for(int i = 0; i < numberStr.length(); i++){
            sum = sum + Integer.parseInt(numberStr.substring(i, i + 1));
        }
        return sum;
    }

    int result() {
        int max = 0;
        for (int a = 2; a < 100; a++) {
            for (int b = 2; b < 100; b++) {
                int temp = calculate(a, b);
                if(max < temp){
                    max = temp;
                }
            }
        }
        return max;
    }

    public static void main(String args[]) {
        Problem056 problem = new Problem056();
        System.out.println(problem.result());
    }
}
