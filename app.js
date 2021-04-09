const mysql = require('mysql');
// const inquirer = require('inquirer');
// const cTable = require('console.table');

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  user: 'root',

  password: 'yourRootPassword',

  database: 'cms',
});

function start() {
    console.log("app started");
}



// connect to the mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    
    start();
  });