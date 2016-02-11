import java.math.BigInteger;

public class Problem063 {

    BigInteger pow(int a, int b){
        BigInteger number = BigInteger.ONE;
        for(int x = 1; x <= b; x++){
            number = number.multiply(BigInteger.valueOf(a));
        }
        return number;
    }

    int result(){
        int count = 0;
        for(int n = 1; n <= 21; n++){
            for(int i = 1; i<10; i++){
                BigInteger value = pow(i, n);
                if(value.toString().length() == n){
                    count = count + 1;
                }
            }
        }
        return count;
    }

    public static void main(String args[]){
        Problem063 problem = new Problem063();
        System.out.println(problem.result());
    }
}
