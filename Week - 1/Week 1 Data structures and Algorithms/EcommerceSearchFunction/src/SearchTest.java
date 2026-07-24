public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
                new Product(103, "Keyboard", "Accessories"),
                new Product(101, "Laptop", "Electronics"),
                new Product(104, "Monitor", "Electronics"),
                new Product(102, "Mouse", "Accessories"),
                new Product(105, "Phone", "Electronics")
        };
        System.out.println("===== LINEAR SEARCH =====");
        Product linearResult = SearchEngine.linearSearch(products, "Mouse");
        if (linearResult != null) {
            System.out.println("Product Found!");
            System.out.println("Product ID : " + linearResult.proid);
            System.out.println("Product Name : " + linearResult.proname);
            System.out.println("Category : " + linearResult.category);
        } else {
            System.out.println("Product Not Found!");
        }
        System.out.println();
        System.out.println("===== BINARY SEARCH =====");
        Product binaryResult = SearchEngine.binarySearch(products, "Mouse");
        if (binaryResult != null) {
            System.out.println("Product Found!");
            System.out.println("Product ID : " + binaryResult.proid);
            System.out.println("Product Name : " + binaryResult.proname);
            System.out.println("Category : " + binaryResult.category);
        } else {
            System.out.println("Product Not Found!");
        }
    }
}