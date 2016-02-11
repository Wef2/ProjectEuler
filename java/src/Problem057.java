import java.math.BigInteger;

public class Problem057 {

    int result(){
        BigInteger denominator = new BigInteger("1");
        BigInteger numerator = new BigInteger("1");
        int index = 0;
        int value = 0;
        while(index <= 1000){
            index = index + 1;
            BigInteger tempDenominator = numerator.add(denominator);
            BigInteger tempNumerator = numerator.add(denominator.multiply(new BigInteger("2")));
            denominator = tempDenominator;
            numerator = tempNumerator;
            String denomiatorString = denominator.toString();
            String numeratorString = numerator.toString();
            if(numeratorString.length() > denomiatorString.length()){
                value = value + 1;
            }
        }
        return value;
    }

    public static void main(String args[]){
        Problem057 problem = new Problem057();
        System.out.println(problem.result());
    }
}
