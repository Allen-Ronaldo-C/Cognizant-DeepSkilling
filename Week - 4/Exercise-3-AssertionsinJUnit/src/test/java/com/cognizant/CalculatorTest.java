package com.cognizant;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {
    Calculator calculator = new Calculator();
    @Test
    public void testAddition() {
        assertEquals(11, calculator.add(6,5));
    }
    @Test
    public void testSubtraction() {
        assertEquals(5, calculator.subtract(10,5));
    }
    @Test
    public void testMultiplication() {
        assertEquals(50, calculator.multiply(10,5));
    }
    @Test
    public void testDivision() {
        assertEquals(2, calculator.divide(10,5));
    }
    @Test
    public void testTrue() {
        assertTrue(calculator.isPositive(10));
    }
    @Test
    public void testFalse() {
        assertFalse(calculator.isPositive(-5));
    }
    @Test
    public void testNotNull() {
        assertNotNull(calculator.getName());
    }
    @Test
    public void testNull() {
        assertNull(calculator.getNullValue());
    }
}