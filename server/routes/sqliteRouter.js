const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./parentchild.db');
const router=express.Router();

router.post('/submit', (req, res) => {
    const data = req.body; // Assume the client sends data in JSON format
    const query = `INSERT INTO bank (b_id, b_name, b_add,b_phone) VALUES (?, ?,?,?)`;
    db.run(query, [data.id, data.name, data.address,data.phone], (err,data) => {
      if (err) throw err;
      res.send('Data inserted successfully!');
      console.log(data);
    });
});

router.get('/viewdata', (req, res) => {
    const data = req.body; // Assume the client sends data in JSON format
    const query = 'select * from bank ';
    db.all(query, (err, rows) => {
        if (err) throw err;
        res.send(rows);
    
      });
    
});


module.exports=router