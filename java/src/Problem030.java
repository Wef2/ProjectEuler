/**
 * Created by BK on 2016-04-03.
 */
public class Problem030 {

    public int result() {
        int value = 0;
        for (int i = 2; i <= 354294; i++) {
            String str = Integer.toString(i);
            int five = 0;
            for (int a = 0; a < str.length(); a++) {
                int num = Integer.parseInt(str.substring(a, a + 1));
                int fiveTime = num * num * num * num * num;
                five = five + fiveTime;
            }
            if (five == i) {
                value = value + i;
            }
        }
        return value;
    }

    public static void main(String args[]) {
        Problem030 problem = new Problem030();
        System.out.println(problem.result());
    }

}
