package com.cognizant;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
public class LoggingExample {
    private static final Logger l = LoggerFactory.getLogger(LoggingExample.class);
    public static void main(String[] args) {
        l.trace("Trace Message");
        l.debug("Debug Message");
        l.info("Application Started");
        l.warn("Low Memory Warning");
        l.error("Database Connection Failed");
        }
    }
