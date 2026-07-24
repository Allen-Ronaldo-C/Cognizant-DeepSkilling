package com.cognizant;
import org.junit.Test;
import static org.junit.Assert.assertEquals;
public class CalculatorTest {
    @Test
    public void testAddition(){
        Calculator c = new Calculator();
        assertEquals(11,c.add(6,5));
    }

}
