public class Problem039 {

    int numberOfTriangles(int p){
        int number = 0;
        for(int a = 1; a<= p-668; a++){
            for(int b = 1; b<= p-335; b++){
                int c = p - a - b;
                if(a < b && b < c){
                    if(c*c == a*a + b*b){
                        number = number + 1;
                    }
                }
            }
        }
        return number;
    }

    int result(){
        int maxValue = 0;
        int maxIndex = 0;
        for(int i = 12; i <= 1000; i++){
            if(numberOfTriangles(i) > maxValue){
                maxValue = numberOfTriangles(i);
                maxIndex = i;
            }
        }
        return maxIndex;
    }

    public static void main(String args[]){
        Problem039 problem = new Problem039();
        System.out.println(problem.result());
    }
}
