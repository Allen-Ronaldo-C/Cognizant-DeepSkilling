CREATE TABLE LOANS (
    LOAN_ID NUMBER PRIMARY KEY,
    CUSTOMER_NAME VARCHAR2(50),
    DUE_DATE DATE,
    LOAN_AMOUNT NUMBER
);

INSERT INTO LOANS VALUES(1,'Allen',SYSDATE+10,50000);
INSERT INTO LOANS VALUES(2,'John',SYSDATE+45,75000);
INSERT INTO LOANS VALUES(3,'David',SYSDATE+20,60000);
INSERT INTO LOANS VALUES(4,'Peter',SYSDATE+60,80000);
COMMIT;

SELECT * FROM LOANS;

SET SERVEROUTPUT ON;
BEGIN
    FOR loan IN (SELECT * FROM LOANS)
    LOOP
        IF loan.DUE_DATE <= SYSDATE + 30 THEN
            DBMS_OUTPUT.PUT_LINE(
                'Reminder: Dear ' ||
                loan.CUSTOMER_NAME ||
                ', your loan of Rs.' ||
                loan.LOAN_AMOUNT ||
                ' is due on ' ||
                TO_CHAR(loan.DUE_DATE,'DD-MON-YYYY')
            );
        ELSE
            DBMS_OUTPUT.PUT_LINE(
                loan.CUSTOMER_NAME ||
                ' has no loan due within 30 days.'
            );
        END IF;
    END LOOP;
END;
/