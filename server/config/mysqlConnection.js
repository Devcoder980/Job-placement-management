// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'admin',
//     password: 'admin',
//     database: 'jobsdb'
//   });

// Connect to the MySQL database:

// const myconnnect= async()=>{
//  connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL database!');
//   });
// }

// module.exports=myconnnect
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./parentchild.db');

const myconnnect = async () => {
  // Create a new table
// db.run('CREATE TABLE my_table (id INTEGER PRIMARY KEY, name TEXT)');
  
  db.all('select b_name from bank', (err, rows) => {
    if (err) throw err;
    console.log(rows)
    let a=new Object(rows);
    console.log(a);
  });

  db.close((err) => {
    if (err) throw err;
    console.log('Closed the database connection.');
  });

}



module.exports = myconnnect