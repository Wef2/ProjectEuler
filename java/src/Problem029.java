import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by 김 on 2016-02-05.
 */
public class Problem029 {

    List<BigInteger> list = new ArrayList();

    BigInteger calc(int x, int y){
        BigInteger val = new BigInteger("1");
        for(int i=1; i<=y; i++){
            val = val.multiply(BigInteger.valueOf(x));
        }
        return val;
    }

    int result() {
        for (int a = 2; a <= 100; a++){
            for (int b =2; b <= 100; b++){
                BigInteger value = calc(a, b);
                if(list.indexOf(value) == -1){
                    list.add(value);
                }
            }
        }
        return list.size();
    }

    public static void main(String args[]) {
        Problem029 problem = new Problem029();
        System.out.println(problem.result());
    }
}
