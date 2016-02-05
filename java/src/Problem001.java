/**
 * Created by 김 on 2016-02-05.
 */
public class Problem001 {

    int result(){
        int value = 0;
        for(int i=1; i<1000; i++){
            if(i % 3 == 0 || i % 5 == 0){
                value = value + i;
            }
        }
        return value;
    }

    public static void main(String args[]){
        Problem001 problem001 = new Problem001();
        System.out.println(problem001.result());

    }
}
