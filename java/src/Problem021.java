/**
 * Created by 김 on 2016-02-20.
 */
public class Problem021 {
    int d(int n) {
        int value = 0;
        for (int i = 1; i < n; i++) {
            if (n % i == 0) {
                value = value + i;
            }
        }
        return value;
    }

    int result(){
        int resultValue = 0;
        for(int a = 2; a<= 10000; a++){
            if(a != d(a) && a == d(d(a))){
                resultValue = resultValue + a;
            }
        }
        return resultValue;
    }

    public static void main(String args[]){
        Problem021 problem = new Problem021();
        System.out.println(problem.result());
    }
}
