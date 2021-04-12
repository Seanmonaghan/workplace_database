DROP DATABASE IF EXISTS cms;

CREATE DATABASE cms;

USE cms;

SET FOREIGN_KEY_CHECKS=0;

CREATE TABLE department(
department_id INTEGER auto_increment NOT NULL,
department_name VARCHAR(30),
PRIMARY KEY (department_id)
);

CREATE TABLE role(
role_id INTEGER auto_increment NOT NULL,
title VARCHAR(30),
salary DECIMAL(10,2),
department_ID INTEGER,
PRIMARY KEY (role_id),
FOREIGN KEY (department_ID) REFERENCES department(department_id)
);

CREATE TABLE employee(
employee_id INTEGER auto_increment NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER NOT NULL,
manager_id INTEGER,
PRIMARY KEY(employee_id),
FOREIGN KEY(role_id) REFERENCES role(role_id),
FOREIGN KEY(manager_id) REFERENCES employee(employee_id)
);
