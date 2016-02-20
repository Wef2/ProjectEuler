import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by 김 on 2016-02-20.
 */
public class Problem052 {

    boolean check(int n) {
        String str = Integer.toString(n);
        List<String> list = new ArrayList();
        for (int a = 0; a < str.length(); a++) {
            list.add(str.substring(a, a + 1));
        }
        Collections.sort(list);

        for (int i = 2; i <= 6; i++) {
            List<String> tempList = new ArrayList();
            int tempValue = n * i;
            String tempStr = Integer.toString(tempValue);
            for (int j = 0; j < tempStr.length(); j++) {
                tempList.add(tempStr.substring(j, j + 1));
            }
            Collections.sort(tempList);
            if (!list.toString().equals(tempList.toString())) {
                return false;
            }
        }
        return true;
    }

    int result() {
        int index = 0;
        while (true) {
            index = index + 1;
            if (check(index)) {
                break;
            }
        }
        return index;
    }

    public static void main(String args[]) {
        Problem052 problem = new Problem052();
        System.out.println(problem.result());
    }

}
