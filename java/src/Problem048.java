import java.math.BigInteger;

/**
 * Created by 김 on 2016-02-05.
 */
public class Problem048 {

    long lastTen(long x){
        long value = 1;
        for(int i=1; i<=x; i++){
            value = value * x;
            String str = Long.toString(value);
            if(str.length() > 10){
                str = str.substring((str.length() - 10), str.length());
                value = Long.parseLong(str);
            }
        }
        return value;
    }

    long result(){
        long resultValue = 0;
        for(int i=1; i<=1000; i++){
            resultValue = resultValue + lastTen(i);
        }
        String resultStr = Long.toString(resultValue);
        resultStr = resultStr.substring((resultStr.length() - 10), resultStr.length());
        resultValue = Long.parseLong(resultStr);
        return resultValue;
    }

    public static void main(String args[]) {
        Problem048 problem = new Problem048();
        System.out.println(problem.result());
    }
}
