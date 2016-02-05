import java.math.BigInteger;
import java.util.Arrays;

/**
 * Created by 김 on 2016-02-05.
 */
public class Problem010 {

    boolean numberArray[] = new boolean[2000000];

    void set() {
        Arrays.fill(numberArray, true);
        for (int i = 2; i < Math.sqrt(2000000); i++) {
            if (numberArray[i]) {
                for (int j = i + i; j < 2000000; j = j + i) {
                    numberArray[j] = false;
                }
            }
        }
    }

    BigInteger result(){
        set();
        BigInteger value = new BigInteger("0");
        for(int i=2; i<2000000; i++){
            if(numberArray[i]){
                value = value.add(BigInteger.valueOf(i));
            }
        }
        return value;
    }

    public static void main(String args[]) {
        Problem010 problem = new Problem010();
        System.out.println(problem.result().toString());
    }
}
