USE cms;

INSERT INTO department(name)
VALUES ('HR'), ('Management'), ('Carriers'), ('Clerks');

INSERT INTO role(title, salary, department_id)
VALUES ('CCA', 50000, 3), ('RCA', 56000, 3), ('Clerk', 48000, 4), ('Supevisor', 65000, 2), ('Labor Relations', 60000, 1);

INSERT INTO employee(first_name, last_name, role_id)
VALUES ('bob', 'smith', '3'), ('susan', 'strong', 1), ('bill', 'smith', 5), ('steve', 'sang', 2), ('ana', 'anes', 4);