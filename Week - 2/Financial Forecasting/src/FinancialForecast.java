import java.util.Scanner;
public class FinancialForecast {
    public static double forecast(double currentval, double growthRate, int y) {
        if (y == 0) {
            return currentval;
        }
        return forecast(
                currentval * (1 + growthRate / 100),
                growthRate,
                y - 1
        );
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double currentval = sc.nextDouble();
        double growthRate = sc.nextDouble();
        int y = sc.nextInt();
        double futureValue = forecast(currentval, growthRate, y);
        System.out.printf("\nFuture Value after %d years = %.2f%n", y, futureValue);
        sc.close();
    }
}