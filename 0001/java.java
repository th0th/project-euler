
public class Main {
  public static void main(String[] args) {
    int limit = 1000;
    int div[] = { 3, 5 };
    System.out.println(solution(limit, div));
  }

  public static int solution(int limit, int[] div) {

    int i, sum = 0;

    for (i = 1; i < limit; i++) {
      for (int j = 0; j < div.length; j++) {
        if (i % div[j] == 0) {
          sum += i;
          break;
        }
      }
    }
    return sum;
  }
}
