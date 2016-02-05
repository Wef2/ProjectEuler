/**
 * Created by 김 on 2016-02-05.
 */
public class Problem002 {

    int result(){
        int value = 0;
        int x = 1;
        int y = 2;
        while(y < 4000000){
            if(y % 2 == 0){
                value = value + y;
            }
            int temp = y;
            y = x + y;
            x = temp;
        }
        return value;
    }

    public static void main(String args[]){
        Problem002 problem = new Problem002();
        System.out.println(problem.result());

    }
}
