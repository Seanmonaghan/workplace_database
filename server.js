const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  user: 'root',

  password: 'yourRootPassword',

  database: 'cms',
});

const addDepartment = () => {
  console.log("department added");
}

const viewDepartments = () => {
    connection.query('SELECT * FROM department', (err, results) => {
      if (err) throw err;
      const table = cTable.getTable(results)
      console.log(table);
      start();
    })
};

const viewRoles = () => {
  connection.query('SELECT * FROM role', (err, results) => {
    if (err) throw err;
    const table = cTable.getTable(results)
    console.log(table);
    start();
  })
};

const viewEmployees = () => {
  connection.query('SELECT * FROM employee', (err, results) => {
    if (err) throw err;
    const table = cTable.getTable(results)
    console.log(table);
    start();
  })
};



const start = () => {
    inquirer
      .prompt({
        name: "firstChoice",
        type: 'list',
        message: "What would you like to do?",
        choices: [
          'Add a department',
          'Add a role',
          'Add an employee',
          'View all departments',
          'View all roles',
          'View all employees',
          "Update an employee's role",
          "Update an employee's manager",
          'Delete a department',
          'Delete a role',
          'Delete an employee',
          'View a total utilized budget of a department'
        ]
      })
      .then((answer) => {
        if (answer.firstChoice === 'Add a department') {
          addDepartment();
        } else if (answer.firstChoice === 'View all departments') {
          viewDepartments();
        } else if (answer.firstChoice === 'View all roles') {
          viewRoles();
        } else if (answer.firstChoice === 'View all employees') {
          viewEmployees();
        }
      })
}







// connect to the mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    
    start();
  });