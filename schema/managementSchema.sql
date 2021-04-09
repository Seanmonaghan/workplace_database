DROP DATABASE IF EXISTS cms;

CREATE DATABASE cms;

USE cms;

CREATE TABLE department(
id INTEGER NOT NULL,
name VARCHAR(30),
PRIMARY KEY (id)
);

CREATE TABLE role(
id INTEGER NOT NULL,
title VARCHAR(30),
salary DECIMAL(10,2),
department_ID INTEGER,
PRIMARY KEY (id),
FOREIGN KEY (department_ID) REFERENCES department(id)
);

CREATE TABLE employee(
id INTEGER NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER NOT NULL,
manager_id INTEGER,
PRIMARY KEY(id),
FOREIGN KEY(role_id) REFERENCES role(id),
FOREIGN KEY(manager_id) REFERENCES employee(id)
);