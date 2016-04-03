/**
 * Created by BK on 2016-04-03.
 */
public class Problem112 {

    public boolean isBouncy(int n) {
        if (n < 100) {
            return false;
        }
        String str = Integer.toString(n);
        int checkIncreasing = 0;
        int checkDecreasing = 0;
        for (int i = 0; i < str.length() - 1; i++) {
            if (Integer.parseInt(str.substring(i, i + 1)) <= Integer.parseInt(str.substring(i + 1, i + 2))) {
                checkIncreasing = checkIncreasing + 1;
            }
            if (Integer.parseInt(str.substring(i, i + 1)) >= Integer.parseInt(str.substring(i + 1, i + 2))) {
                checkDecreasing = checkDecreasing + 1;
            }
        }

        boolean returnValue = true;
        if (checkIncreasing == (str.length() - 1)) {
            returnValue = false;
        }
        if (checkDecreasing == (str.length() - 1)) {
            returnValue = false;
        }
        return returnValue;
    }

    int result() {
        int index = 1;
        int count = 0;
        float a;
        while (true) {
            if (isBouncy(index)) {
                count = count + 1;
            }
            if ((double)count / (double)index * 100 == 99) {
                break;
            }
            index = index + 1;
        }
        return index;
    }

    public static void main(String args[]) {
        Problem112 problem = new Problem112();
        System.out.println(problem.result());
    }
}
