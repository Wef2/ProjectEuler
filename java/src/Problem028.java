public class Problem028{

    long result(){
        long value = 1;
        for(int i=2; i<=501; i++){
            value = value + (2*i-1)*(2*i-1);
            value = value + (2*i-1)*(2*i-1) - 2*(i-1);
            value = value + (2*i-1)*(2*i-1) - 4*(i-1);
            value = value + (2*i-1)*(2*i-1) - 6*(i-1);
        }
        return value;
    }

    public static void main(String args[]){
        Problem028 problem = new Problem028();
        System.out.println(problem.result());
    }
}