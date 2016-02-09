public class Problem097 {

    long result() {
        long value = 28433;
        for (int i = 1; i <= 7830457; i++) {
            value = value * 2;
            String valueStr = Long.toString(value);
            if (valueStr.length() > 10) {
                String sub = valueStr.substring(1, 11);
                value = Long.parseLong(sub);
            }
        }
        value = value + 1;
        return value;
    }

    public static void main(String args[]) {
        Problem097 problem = new Problem097();
        System.out.println(problem.result());
    }
}