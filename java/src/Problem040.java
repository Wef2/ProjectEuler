public class Problem040 {

    int result() {
        int index = 1;
        int productPosition = 10;
        int totalLength = 0;
        int value = 1;
        while (productPosition < 10000000) {
            String strIndex = Integer.toString(index);
            for (int i = 0; i < strIndex.length(); i++) {
                totalLength = totalLength + 1;
                if (totalLength == productPosition) {
                    value = value * Integer.parseInt(strIndex.substring(i, i + 1));
                    productPosition = productPosition * 10;
                }
            }
            index = index + 1;
        }
        return value;
    }

    public static void main(String args[]) {
        Problem040 problem = new Problem040();
        System.out.println(problem.result());
    }
}