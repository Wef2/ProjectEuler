import java.util.ArrayList;

import static java.lang.Integer.parseInt;

/**
 * Created by BK on 2016-04-03.
 */
public class Problem074 {

    ArrayList<Integer> factorial = new ArrayList<>();
    ArrayList<Integer> loopArray = new ArrayList<>();

    public int sum(int num) {
        int value = 0;
        String str = Integer.toString(num);
        for (int i = 0; i < str.length(); i++) {
            value = value + factorial.get(parseInt(str.substring(i, i + 1)));
        }
        return value;
    }

    public int nonRepeatingTerms(int n) {
        int count = 1;
        loopArray.clear();
        loopArray.add(n);
        int currentNumber = sum(loopArray.get(0));
        while (loopArray.indexOf(currentNumber) == -1) {
            loopArray.add(currentNumber);
            count = count + 1;
            currentNumber = sum(loopArray.get(count - 1));
        }
        return count;
    }

    public void init() {
        factorial.add(1);
        factorial.add(1);
        for (int i = 2; i < 10; i++) {
            factorial.add(i, factorial.get(i - 1) * i);
        }
    }

    public int result() {
        init();
        int value = 0;
        for (int i = 1; i <= 1000000; i++) {
            if (nonRepeatingTerms(i) == 60) {
                value = value + 1;
            }
        }
        return value;
    }

    public static void main(String args[]) {
        Problem074 problem = new Problem074();
        System.out.println(problem.result());
    }
}
