package com.cognizant;

public class MyServices {
    private ExternalApi exa;
    public MyServices(ExternalApi exa){
        this.exa = exa;
    }
    public void processData(){
        exa.fetchData();
    }
}
