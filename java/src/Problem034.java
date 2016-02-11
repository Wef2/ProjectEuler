/**
 * Created by 김 on 2016-02-11.
 */
public class Problem034 {

    int factorial(int n) {
        int value = 1;
        for (int i = 1; i <= n; i++) {
            value = value * i;
        }
        return value;
    }

    int result() {
        int value = 0;
        for (int a = 10; a < 1000000; a++) {
            int sum = 0;
            String str = Integer.toString(a);
            for (int b = 0; b < str.length(); b++) {
                sum += factorial(Integer.parseInt(str.substring(b, b + 1)));
            }
            if (a == sum) {
                value = value + a;
            }
        }
        return value;
    }

    public static void main(String args[]) {
        Problem034 problem = new Problem034();
        System.out.println(problem.result());
    }
}