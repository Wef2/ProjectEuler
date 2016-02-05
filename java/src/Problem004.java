/**
 * Created by 김 on 2016-02-05.
 */
public class Problem004 {

    boolean isPalindrome(String str) {
        for (int k = 0; k < str.length() / 2; k++) {
            if (!str.substring(k, k + 1).equals(str.substring(str.length() - k - 1, str.length() - k))) {
                return false;
            }
        }
        return true;
    }

    int result() {
        int maxValue = 0;
        for (int i = 100; i < 1000; i++) {
            for (int j = 100; j < 1000; j++) {
                int product = i * j;
                String productString = Integer.toString(product);
                if (isPalindrome(productString)) {
                    if (maxValue < product) {
                        maxValue = product;
                    }
                }
            }
        }
        return maxValue;
    }

    public static void main(String args[]) {
        Problem004 problem = new Problem004();
        System.out.println(problem.result());
    }
}