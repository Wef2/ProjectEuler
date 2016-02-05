import java.util.Arrays;

/**
 * Created by 김 on 2016-02-05.
 */
public class Problem007 {

    boolean numberArray[] = new boolean[200000];

    void set(){
        Arrays.fill(numberArray, true);
        for(int i=2; i<Math.sqrt(200000); i++){
            if(numberArray[i]){
                for(int j=i+i; j<200000; j = j + i){
                    numberArray[j] = false;
                }
            }
        }
    }

    int result() {
        set();
        int count = 0;
        int index = 1;
        while(count < 10001){
            index = index + 1;
            if(numberArray[index]){
                count = count + 1;
            }
        }
        return index;
    }

    public static void main(String args[]) {
        Problem007 problem = new Problem007();
        System.out.println(problem.result());
    }
}