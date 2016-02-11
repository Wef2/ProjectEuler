import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Problem038 {

    List<Integer> list = new ArrayList();

    void initList(){
        for (int i = 1; i <= 9; i++) {
            list.add(i);
        }
    }

    String toNine(int n) {
        String str = "";
        int a = 1;
        while (str.length() < 9) {
            int number = n * a;
            str = str + Integer.toString(number);
            a = a + 1;
        }
        if (str.length() != 9) {
            str = "";
        }
        return str;
    }

    boolean isPandigital(String string) {
        boolean returnValue = false;
        List<Integer> newList = new ArrayList();
        for (int a = 0; a < string.length(); a++) {
            newList.add(Integer.parseInt(string.substring(a, a + 1)));
        }
        Collections.sort(newList);
        if(newList.equals(list)){
            returnValue = true;
        }
        return returnValue;
    }

    long result() {
        initList();
        int index = 1;
        long maxPandigital = 0;
        for (int i = 1; i < 10000; i++) {
            String nine = toNine(i);
            if (nine.length() == 9) {
                if (isPandigital(nine)) {
                    if(maxPandigital < Long.parseLong(nine)){
                        maxPandigital = Long.parseLong(nine);
                    }
                }
            }
        }
        return maxPandigital;
    }

    public static void main(String args[]) {
        Problem038 problem = new Problem038();
        System.out.println(problem.result());
    }
}