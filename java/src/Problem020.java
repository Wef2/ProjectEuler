import java.math.BigInteger;

/**
 * Created by 김 on 2016-02-05.
 */
public class Problem020 {

    int result(){
        BigInteger value = new BigInteger("1");
        for(int i=2; i<=100; i++){
            value = value.multiply(BigInteger.valueOf(i));
        }
        String str = value.toString();
        int resultValue = 0;
        for(int j=0; j<str.length(); j++){
            resultValue = resultValue + Integer.parseInt(str.substring(j,j+1));
        }
        return resultValue;
    }

    public static void main(String args[]) {
        Problem020 problem = new Problem020();
        System.out.println(problem.result());
    }
}
