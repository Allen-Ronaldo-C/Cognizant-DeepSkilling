package com.cognizant;

public class MyService {
    private ExternalApi exa;
    public MyService(ExternalApi exa){
        this.exa = exa;
    }
    public String fetchData(){
        return exa.getData();
    }
}
