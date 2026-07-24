package com.cognizant;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {
    Calculator c;
    @Before
    public void setUp() {
        System.out.println("Before Test");
        c = new Calculator();
    }
    @After
    public void tearDown() {
        System.out.println("After Test");
    }
    @Test
    public void testAddition() {
        int a = 10;
        int b = 5;
        int result = c.add(a, b);
        assertEquals(15, result);
    }
    @Test
    public void testSubtraction() {
        int a = 10;
        int b = 5;
        int result = c.subtract(a, b);
        assertEquals(5, result);
    }
}