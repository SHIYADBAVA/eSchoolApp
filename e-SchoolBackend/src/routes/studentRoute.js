const { urlencoded } = require('express');
const express = require('express');
const studentRouter = express.Router();
const jwt = require('jsonwebtoken');
studentRouter.use(express.json());
var Studentdata=require('../model/Studentdata');


    // studentRouter.get('/',(req, res, next)=>{
    //     res.header("Access-Control-Allow-Orign", "*")
    //     req.header("Access-Control-Allow-Method: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    //     Studentdata.find()
    //     .then((student)=>{
    //         res.send(student);
    //     });  
    // });
studentRouter.get('/',(req, res, next)=>{
    res.send('success to student');
});

USERNAME='student'
PASSWORD='student@123'
// Student Login Route
studentRouter.post('/',(req, res, next)=>{
        let StudentData = req.body

            if(!USERNAME)
            {
                res.status(401).send("Invalid Username");
                console.log('login failed username')

            }else
            if (USERNAME == StudentData.username && PASSWORD == StudentData.password)
            {
                let payload ={subject:USERNAME+PASSWORD}
                let token =jwt.sign(payload,'secretKey')
                res.status(200).send({token})
                console.log('login success');

            } else {
                res.status(401).send('Invalid Credentials');
                console.log('login failed by Invalid Credentials');
            }
});

// studentRouter.post('/',(req, res, next)=>{
//     var std =new Studentdata({
//         name:req.body.name,
//         classname:req.body.classname,
//         username:req.body.username,
//         email:req.body.email,
//         regno:req.body.regno,
//         password:req.body.password
//     });
//     std.save((err, doc)=>{
//         if(!err)
//         {
//             console.log(doc);
//         }
//         else
//         {
//             console.log("Error in employee saving "+ JSON.stringify(err, undefined, 2));
//         }
//     });
// });
module.exports = studentRouter;
