package com.cognizant;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
public class MyServiceTest {
    @Test
    public void testFetchData() {
        ExternalApi ma = mock(ExternalApi.class);
        when(ma.getData()).thenReturn("Hello from Mockito");
        MyService service = new MyService(ma);
        String result = service.fetchData();
        assertEquals("Hello from Mockito", result);
    }
}
