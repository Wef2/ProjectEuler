import java.math.BigInteger;

public class Problem025 {

    BigInteger fibonacciOne = new BigInteger("1");
    BigInteger fibonacciTwo = new BigInteger("2");

    int result(){
        int index = 3;
        while(fibonacciTwo.toString().length() < 1000){
            BigInteger fibonacciTemp = fibonacciTwo;
            fibonacciTwo = fibonacciOne.add(fibonacciTwo);
            fibonacciOne = fibonacciTemp;
            index = index + 1;
        }
        return index;
    }

    public static void main(String args[]){
        Problem025 problem = new Problem025();
        System.out.println(problem.result());
    }
}
