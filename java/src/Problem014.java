public class Problem014 {

    int maxProcess = 1;
    int maxNumber = 1;

    int result() {
        for (int i = 1; i < 1000000; i++) {
            long number = i;
            int process = 0;
            while (number != 1) {
                if (number % 2 == 0) {
                    number = number / 2;
                } else {
                    number = number * 3 + 1;
                }
                process = process + 1;
            }
            if (maxProcess < process) {
                maxProcess = process;
                maxNumber = i;
            }
        }
        return maxNumber;
    }

    public static void main(String args[]) {
        Problem014 problem = new Problem014();
        System.out.println(problem.result());
    }

}
