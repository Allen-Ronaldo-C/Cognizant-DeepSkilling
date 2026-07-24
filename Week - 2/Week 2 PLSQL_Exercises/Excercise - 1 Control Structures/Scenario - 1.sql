CREATE TABLE CUSTOMERS (
     CUSTOMER_ID NUMBER PRIMARY KEY,
     CUSTOMER_NAME VARCHAR2(50),
     DOB DATE,
     LOAN_INTEREST NUMBER
);
INSERT INTO CUSTOMERS VALUES(101,'Allen',TO_DATE('15-08-2005','DD-MM-YYYY'),8);
INSERT INTO CUSTOMERS VALUES(102,'John',TO_DATE('20-06-1955','DD-MM-YYYY'),9);
INSERT INTO CUSTOMERS VALUES(103,'David',TO_DATE('11-01-1948','DD-MM-YYYY'),10);
INSERT INTO CUSTOMERS VALUES(104,'Peter',TO_DATE('01-03-1985','DD-MM-YYYY'),8.5);
COMMIT;

SET SERVEROUTPUT ON;

DECLARE
    age NUMBER;
BEGIN
    FOR customer IN (SELECT * FROM CUSTOMERS)
    LOOP
        age := FLOOR(MONTHS_BETWEEN(SYSDATE, customer.DOB) / 12);
        IF age > 60 THEN
            UPDATE CUSTOMERS
            SET LOAN_INTEREST = LOAN_INTEREST - 1
            WHERE CUSTOMER_ID = customer.CUSTOMER_ID;
            DBMS_OUTPUT.PUT_LINE(
                customer.CUSTOMER_NAME ||
                ' is ' || age ||
                ' years old. Interest rate reduced by 1%.'
            );
        ELSE
            DBMS_OUTPUT.PUT_LINE(
                customer.CUSTOMER_NAME ||
                ' is ' || age ||
                ' years old. No discount applied.'
            );
        END IF;
    END LOOP;
    COMMIT;
END;
/

SELECT * FROM CUSTOMERS;
