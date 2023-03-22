const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const connectDb =require('./config/dbconnection.js');
const myconnnect = require('./config/mysqlConnection.js');
const cors = require('cors')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connectDb();
myconnnect();

app.use(cors());

app.use('/api/user/',require('./routes/userRouter.js'))
app.use('/api/user/',require('./routes/jobRouter'))
app.use('/api/user/',require('./routes/sqliteRouter'))
app.use('/api/user/',require('./routes/contactUs'))
app.use('/api/user/',require('./routes/newsLetterRouter'));

  const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
