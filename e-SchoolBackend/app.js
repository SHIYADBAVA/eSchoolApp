const express = require('express');
// const StudentData = require('./src/model/Studentdata');
const cors = require('cors');
var bodyparser = require('body-parser');
var app = new express();
const studentRouter = require('./src/routes/studentRoute');
const facultyRouter = require('./src/routes/facultyRoutes');
const adminRouter = require('./src/routes/adminRoutes');


app.use(cors());
app.use(bodyparser.json());
app.use('/student', studentRouter);
app.use('/faculty', facultyRouter);
app.use('/admin', adminRouter);
app.use(express.static('./public'));


app.get('/',(req, res, next)=>{
    res.json({
        "statusCode": 200,
        "statusMessage": "Success"
    });
});






app.listen(3000, function(){
    console.log("Listening to port 3000");
});