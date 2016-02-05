/**
 * Created by 김 on 2016-02-05.
 */
public class Problem006 {


    int result() {
        int value1 = 0;
        int value2 = 0;
        for (int i = 1; i <= 100; i++) {
            value1 = value1 + i * i;
            value2 = value2 + i;
        }
        value2 = value2 * value2;
        return value2 - value1;
    }

    public static void main(String args[]) {
        Problem006 problem = new Problem006();
        System.out.println(problem.result());
    }
}
