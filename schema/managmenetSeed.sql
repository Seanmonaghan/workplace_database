USE cms;

INSERT INTO department(department_name)
VALUES ('HR'), ('Management'), ('Carriers'), ('Clerks');

INSERT INTO role(title, salary, department_id)
VALUES ('CCA', 50000, 3), ('RCA', 56000, 3), ('Clerk', 48000, 4), ('Supevisor', 65000, 2), ('Labor Relations', 60000, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('David', 'Bowie', 3, 5), ('Susan', 'Strong', 1, null), ('Wiley', 'Coyote', 5, 4), ('Fred', 'Flintstone', 2, null), ('Jack', 'Daniels', 4, 2);
