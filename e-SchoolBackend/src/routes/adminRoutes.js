const express = require('express');
// const Admindata = require('../model/Admindata');
// Importing Student Model
const Studentdata = require('../model/Studentdata');
// Importing Faculty Model
const Facultydata = require("../model/Facultydata");
const adminRouter = express.Router();
const { mongo } = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
// Importing JSONWebToken
const jwt = require('jsonwebtoken');
// adminRouter.use(express.json());
// adminRouter.use(urlencoded({extended:true}));


// ############## / / / / ***************** / / / / / /################\\

// ************* Admin Section Routes Starts Here ***************\\


adminRouter.get('/',(req,res,next)=>{
    res.send("Admin Routes Connect Successfully..");
});

// Admin Login Route 

username='admin'
password='admin@123'
adminRouter.post('/',(req, res, next)=>{
        let AdminData = req.body

            if(!username)
            {
                res.status(401).send("Invalid Username");
                console.log('login failed username')

            }else
            if (username == AdminData.username && password == AdminData.password)
            {
                let payload ={subject:username+password}
                let token =jwt.sign(payload,'secretKey')
                res.status(200).send({token})
                console.log('login success');

            } else {
                res.status(401).send('Invalid Credentials');
                console.log('login failed by Invalid Credentials');
            }
});


// ############## / / / / ***************** / / / / / /################\\


// ************* Admin Student Section Routes Starts Here ***************\\

// ************* Admin Student List loading ***************\\

adminRouter.get('/student',(req, res, next)=>{
    Studentdata.find((err, docs)=>{
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            console.log("Error in retreving Student" + JSON.stringify(err, undefined, 2));
        }
    })
});
// ************* Admin New Student Details Creating Routes ***************\\

adminRouter.get('/addstudent',(req,res,next)=>{
    res.send("Load Add Student Form");
});

adminRouter.post('/addstudent',(req, res, next)=>{
    var student =new Studentdata({
        name:req.body.name,
        classname:req.body.classname,
        username:req.body.username,
        email:req.body.email,
        regno:req.body.regno,
        password:req.body.password
    });
    student.save((err, doc)=>{
        if(!err)
        {
            console.log(doc);
        }
        else
        {
            console.log("Error in Student saving "+ JSON.stringify(err, undefined, 2));
        }
    });
});

// ************* Admin Single Student Details Routes ***************\\

adminRouter.get('/student/:id',(req, res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record with same id: ${req.params.id}`)

    Studentdata.findById(req.params.id, (err, doc)=>{
        if(!err)
        {
            res.send(doc);
        }
        else
        {
            console.log("Error in retrieving Student"+ JSON.stringify(err, undefined, 2));
        }
    });
});

// ************* Admin Single Student Details Udating Routes ***************\\

adminRouter.put("/student/:id",(req, res)=>{
    if(!ObjectId.isValid(req.params.id))
    {
        return res.status(400).send(`No Record with same id: ${req.params.id}`);
    }
    
        var std = {
            name:req.body.name,
            classname:req.body.classname,
            username:req.body.username,
            email:req.body.email,
            regno:req.body.regno,
            password:req.body.password
        };
        Studentdata.findByIdAndUpdate(req.params.id, { $set:std },{ new:true },(err, doc)=>{
            if(!err)
            {
                res.send(doc);
            }
            else
            {
                console.log("Error in Student update"+ JSON.stringify(err, undefined, 2));
            }
        });
});

// ************* Admin Single Student Details Deleting Routes ***************\\

adminRouter.delete("/student/:id",(req, res)=>{
    if(!ObjectId.isValid(req.param.id))
        // return res.status(400).send(`No Record with same id: ${req.params.id}`);
    Studentdata.findByIdAndRemove(req.params.id,(err, doc)=>{
            if(!err)
            {
                res.send(doc);
            }
            else
            {
                console.log("Error in Student Delete"+ JSON.stringify(err, undefined, 2));
            }
        });
});

// ************* Admin Student Section Routes Ends Here ***************\\

// ############## / / / / ***************** / / / / / /################\\

// ************* Admin Faculty Section Routes Starts Here ***************\\

// ************* Admin Faculty List Load Routes  ***************\\

adminRouter.get('/faculty',(req, res, next)=>{
    Facultydata.find((err, docs)=>{
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            console.log("Error in retreving Faculty" + JSON.stringify(err, undefined, 2));
        }
    })
});
// ************* Admin New Faculty Details Creating Routes ***************\\

adminRouter.post('/faculty/addfaculty',(req, res, next)=>{
    var fty =new Facultydata({
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    });
    fty.save((err, doc)=>{
        if(!err)
        {
            console.log(doc);
        }
        else
        {
            console.log("Error in Faculty saving "+ JSON.stringify(err, undefined, 2));
        }
    });
});

// ************* Admin Single Faculty Details Routes ***************\\

adminRouter.get('/faculty/:id',(req, res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record with same id: ${req.params.id}`)

    Facultydata.findById(req.params.id, (err, doc)=>{
        if(!err)
        {
            res.send(doc);
        }
        else
        {
            console.log("Error in retrieving faculty"+ JSON.stringify(err, undefined, 2));
        }
    });
});

// ************* Admin Single Faculty Details Udating Routes ***************\\

adminRouter.put("/faculty/:id",(req, res)=>{
    if(!ObjectId.isValid(req.params.id))
    {
        return res.status(400).send(`No Record with same id: ${req.params.id}`);
    }
    
        var fty = {
            name:req.body.name,
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        };
        Facultydata.findByIdAndUpdate(req.params.id, { $set:fty },{ new:true },(err, doc)=>{
            if(!err)
            {
                res.send(doc);
            }
            else
            {
                console.log("Error in Faculty update"+ JSON.stringify(err, undefined, 2));
            }
        });
});

// ************* Admin Single Faculty Details Deleting Routes ***************\\

adminRouter.delete("/faculty/:id",(req, res)=>{
    if(!ObjectId.isValid(req.param.id))
        // return res.status(400).send(`No Record with same id: ${req.params.id}`);
    Facultydata.findByIdAndRemove(req.params.id,(err, doc)=>{
            if(!err)
            {
                res.send(doc);
            }
            else
            {
                console.log("Error in Faculty Delete"+ JSON.stringify(err, undefined, 2));
            }
        });
});

// ############## / / / / ***************** / / / / / /################\\

// ************* Admin Section Routes Ends Here ***************\\


module.exports = adminRouter;