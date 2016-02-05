/**
 * Created by 김 on 2016-02-05.
 */
public class Problem009 {

    int result(){
        int value = 0;
        for(int a=1; a<=998; a++){
            for(int b=1; b<= 999-a; b++){
                int c = 1000 - a - b;
                if(a*a + b*b == c*c){
                    value = a * b * c;
                }
            }
        }
        return value;
    }

    public static void main(String args[]) {
        Problem009 problem = new Problem009();
        System.out.println(problem.result());
    }
}
