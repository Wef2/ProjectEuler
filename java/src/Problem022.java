import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class Problem022 {

    private Scanner scanner;
    private File file;
    private List<String> list = new ArrayList();

    void init(){
        file = new File("../textfiles/problem022.txt");
        try {
            scanner = new Scanner(file);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        String text = scanner.next();
        StringTokenizer stringTokenizer = new StringTokenizer(text, ",");
        while(stringTokenizer.hasMoreTokens()){
            String str = stringTokenizer.nextToken();
            str = str.substring(1, str.length() - 1);
            list.add(str);
        }
        Collections.sort(list);
    }

    int score(String name, int order){
        int value = 0;
        for(int a=0; a<name.length(); a++){
         value = value + name.charAt(a) - 64;
        }
        return value * order;
    }

    long result(){
        init();
        long resultValue = 0;
        for(int i = 0; i<list.size(); i++){
            resultValue = resultValue + score(list.get(i), i+1);
        }
        return resultValue;
    }

    public static void main(String args[]){
        Problem022 problem = new Problem022();
        System.out.println(problem.result());
    }
}
