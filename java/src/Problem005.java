import java.util.ArrayList;
import java.util.List;

/**
 * Created by 김 on 2016-02-05.
 */
public class Problem005 {

    List<Integer> primeNumbers = new ArrayList();
    List<Integer> maxNumbers = new ArrayList();
    List<Integer> tempNumbers = new ArrayList();

    boolean isPrime(int n) {
        for (int a = 0; a < primeNumbers.size(); a++) {
            if (n % primeNumbers.get(a) == 0) {
                return false;
            }
        }
        return true;
    }

    void initTempNumbers(){
        for(int i=0; i<tempNumbers.size(); i++){
            tempNumbers.set(i, 0);
        }
    }

    long square(int x, int y){
        long value = 1;
        for(int a=0; a<y; a++){
            value = value * x;
        }
        return value;
    }

    void setPrimeNumbers(){
        primeNumbers.add(2);
        maxNumbers.add(0);
        tempNumbers.add(0);
        for(int i=3; i<=20; i++){
            if(isPrime(i)){
                primeNumbers.add(i);
                maxNumbers.add(0);
                tempNumbers.add(0);
            }
        }
    }

    long result() {
        setPrimeNumbers();
        for(int x=2; x<=20; x++){
            initTempNumbers();
            int number = x;
            int index = 0;
            while(number > 1){
                if(number % primeNumbers.get(index) == 0){
                    number = number / primeNumbers.get(index);
                    tempNumbers.set(index, tempNumbers.get(index) + 1);
                }
                else{
                    index = index + 1;
                }
            }
            for(int y = 0; y < tempNumbers.size(); y++){
                if(maxNumbers.get(y) < tempNumbers.get(y)){
                    maxNumbers.set(y, tempNumbers.get(y));
                }
            }
        }

        long resultValue = 1;
        for(int i=0; i<maxNumbers.size(); i++){
            resultValue = resultValue * square(primeNumbers.get(i), maxNumbers.get(i));
        }
        return resultValue;
    }

    public static void main(String args[]) {
        Problem005 problem = new Problem005();
        System.out.println(problem.result());
    }
}
