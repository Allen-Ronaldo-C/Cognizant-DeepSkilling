package com.library.main;
import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[]args){
        ApplicationContext con = new ClassPathXmlApplicationContext("applicationContext.xml");
        BookService ser = con.getBean("bookService",BookService.class );
        ser.display();
    }
}
