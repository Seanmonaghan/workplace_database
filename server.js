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

// View Functions

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
  connection.query('SELECT employee.employee_id, employee.first_name, employee.last_name, employee.manager_id, employee.role_id, role.salary, role.title, role.role_id FROM employee INNER JOIN role ON employee.role_id = role.role_id;',
  (err, results) => {
    if (err) throw err;
    const table = cTable.getTable(results)
    console.log(table);
    start();
  })
};

// Add Functions

const addDepartment = () => {
  inquirer
  .prompt({
    name: 'newDepartment',
    type: "input",
    question: "What is the name of the department you want to add?"
  })
  .then((answer) => {
    connection.query(
      'INSERT INTO department SET ?',
      {
        name: answer.newDepartment
      },
      (err) => {
        if (err) throw err;
        console.log("Your department has been added.")
        start();
      }
    )
  }) 
}

const addRole = () => {
  connection.query('SELECT * FROM department', (err, results) => {
    if (err) throw err;
    inquirer
    .prompt([
      {
        name: 'newRole',
        type: "input",
        message: "What is the name of the role you want to add?"
      }, 
      {
        name: 'salary',
        type: 'input',
        message: "What is the salary of this role?"
      },
      {
        name: 'choice',
        type: 'rawlist',
        choices() {
          const choicesArray = [];
          results.forEach(({ name }) => {
            choicesArray.push(name)
          });
          return choicesArray;
        },
        message: "What is the department ID that this role is a part of?"
      }
    ])
    .then((answer) => {
      // console.log(answer);
      let chosenDepartment;
      results.forEach((department) => {
        if (department.name === answer.choice) {
          chosenDepartment = department.department_id;
        }
        ;
      })
      console.log(chosenDepartment)
      start();
  })
  }
) 
}

const addEmployee = () => {

}

// Update Functions

const updateRole = () => {

}

const updateManager = () => {

}







const start = () => {
    inquirer
      .prompt({
        name: "firstChoice",
        type: 'list',
        message: "What would you like to do?",
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
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
        } else if (answer.firstChoice === 'Add a role') {
          addRole();
        } else if (answer.firstChoice === 'Add an employee') {
          addEmployee();
        } else if (answer.firstChoice === "Update an employee's role") {
          updateRole();
        } else if (answer.firstChoice === "Update an employee's manager") {
          updateManager();
        } else if (answer.firstChoice === "Delete a department") {
          updateManager();
        } else if (answer.firstChoice === "Delete a role") {
          updateManager();
        } else if (answer.firstChoice === "Update an employee's manager") {
          updateManager();
        } 
          
      })
};


// connect to the mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    
    start();
  });