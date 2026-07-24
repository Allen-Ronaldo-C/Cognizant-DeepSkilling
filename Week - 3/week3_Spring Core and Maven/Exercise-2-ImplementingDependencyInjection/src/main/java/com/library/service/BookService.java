package com.library.service;
import com.library.repository.BookRepository;

public class BookService {
    private BookRepository rep;
    public void setRep(BookRepository rep){
        this.rep = rep;
    }
    public void display(){
        System.out.println("Book Service Requesting the Repository...");
        rep.display();
    }
}
