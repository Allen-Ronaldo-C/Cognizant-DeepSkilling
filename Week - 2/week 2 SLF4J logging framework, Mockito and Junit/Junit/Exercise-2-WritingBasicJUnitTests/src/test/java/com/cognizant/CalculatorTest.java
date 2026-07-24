package com.cognizant;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {
    Calculator c = new Calculator();
    @Test
    public void testAddition() {
        assertEquals(11, c.add(6, 5));
    }
    @Test
    public void testSubtraction() {
        assertEquals(6, c.subtract(12, 6));
    }
    @Test
    public void testMultiplication() {
        assertEquals(20, c.multiply(10, 2));
    }
    @Test
    public void testDivision() {
        assertEquals(4, c.divide(12, 3));
    }
    @Test
    public void testModulus() {
        assertEquals(0, c.modulus(16,2));
    }
}