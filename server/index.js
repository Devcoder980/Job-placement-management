const express = require('express');
const bodyParser = require('body-parser');
const connectDb = require('./config/dbconnection.js');
const myconnnect = require('./config/mysqlConnection.js');


const cors = require('cors')
const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connectDb();
myconnnect();

app.use(cors());

app.use('/api/user/', require('./routes/userRouter.js'))
app.use('/api/admin/', require('./routes/adminRouter.js'))
app.use('/api/user/', require('./routes/jobRouter'))
app.use('/api/user/', require('./routes/sqliteRouter'))
app.use('/api/user/', require('./routes/contactUs'))
app.use('/api/user/', require('./routes/newsLetterRouter'));
app.use('/api/employer/', require('./routes/EmployerRouter'));
app.use('/api/user/apply', require('./routes/JobApplicationRouter'));
app.use('/api/email', require('./routes/EmailRouter.js'));
app.use('/api/otp', require('./routes/OtpGenerater.js'));
app.use('/api/fileupload', require('./routes/FileUploadRouter.js'));




const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
