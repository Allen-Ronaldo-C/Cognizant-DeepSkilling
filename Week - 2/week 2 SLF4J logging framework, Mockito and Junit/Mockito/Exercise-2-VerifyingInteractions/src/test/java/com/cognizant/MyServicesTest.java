package com.cognizant;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class MyServicesTest {
    @Test
    public void testInteraction(){
        ExternalApi ma = mock(ExternalApi.class);
        MyServices ser = new MyServices(ma);
        ser.processData();
        verify(ma).fetchData();
    }
}
