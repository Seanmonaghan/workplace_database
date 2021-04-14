USE cms;

INSERT INTO department(department_name)
VALUES ('HR'), ('Management'), ('Carriers'), ('Clerks');

INSERT INTO role(title, salary, department_id)
VALUES ('CCA', 50000, 3), ('RCA', 56000, 3), ('Clerk', 48000, 4), ('Supevisor', 65000, 2), ('Labor Relations', 60000, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id, manager_name)
VALUES ('David', 'Bowie', 3, 5, 'Jack'), ('Susan', 'Strong', 1, null, null), ('Wiley', 'Coyote', 5, 4, 'Fred'), ('Fred', 'Flintstone', 2, null, null), ('Jack', 'Skellington', 4, 2, 'Susan');
