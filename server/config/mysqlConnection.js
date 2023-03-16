
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./parentchild.db');

const myconnnect = async () => {
  // Create a new table
// db.run('CREATE TABLE my_table (id INTEGER PRIMARY KEY, name TEXT)');
  
  console.log("DATA base Connected");
}



module.exports = myconnnect