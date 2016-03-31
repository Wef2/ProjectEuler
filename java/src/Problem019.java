/**
 * Created by BK on 2016-03-31.
 */
public class Problem019 {

    int result(){
        int value = 0;
        int dayOfTheWeek = 0;
        int day = 1;
        int month = 1;
        int year = 1901;

        while(true){
            if(day == 1 && dayOfTheWeek == 0){
                value = value + 1;
            }

            day = day + 1;
            dayOfTheWeek = (dayOfTheWeek + 1) % 7;

            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                    if(day == 32){
                        month = month + 1;
                        day = 1;
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    if(day == 31){
                        month = month + 1;
                        day = 1;
                    }
                    break;
                case 2:
                    if(year % 4 == 0 && year % 400 != 0 && year % 100 == 0){
                        if(day == 29){
                            month = month + 1;
                            day = 1;
                        }
                    }
                    else if(year % 4 == 0){
                        if(day == 30){
                            month = month + 1;
                            day = 1;
                        }
                    }
                    else{
                        if(day == 29){
                            month = month + 1;
                            day = 1;
                        }
                    }
                    break;
                case 12:
                    if(day==32){
                        year = year + 1;
                        month = 1;
                        day = 1;
                    }
            }
            if(year == 2001){
                break;
            }
        }
        return value;
    }

    public static void main(String args[]){
        Problem019 problem = new Problem019();
        System.out.println(problem.result());
    }
}
