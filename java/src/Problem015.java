import java.math.BigInteger;

/**
 * Created by 김 on 2016-02-05.
 */
public class Problem015 {

    BigInteger factorial(int n){
        BigInteger value = new BigInteger("1");
        for(int i = 1; i <= n; i++){
            value = value.multiply(BigInteger.valueOf(i));
        }
        return value;
    }

    BigInteger path(int x, int y){
        return factorial(x+y).divide(factorial(x).multiply(factorial(y)));
    }


    BigInteger result(){
        BigInteger value = path(20, 20);
        return value;
    }

    public static void main(String args[]) {
        Problem015 problem = new Problem015();
        System.out.println(problem.result());
    }
}