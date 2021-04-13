const express = require('express');
const facultyRouter = express.Router();
const { mongo } = require('mongoose');
const jwt = require('jsonwebtoken');
facultyRouter.use(express.json());
var bodyparser = require('body-parser');

var ObjectId = require('mongoose').Types.ObjectId;
// importing Models from Database
var Studentdata = require('../model/Studentdata');
var Facultydata = require('../model/Facultydata');
var Timetabledata = require('../model/Timetabledata');


facultyRouter.get('/',(req, res, next)=>{
    res.send("Connected to Faculty...");
});


// Faculty Login Route
Username='tests'
Password='tests@123'
facultyRouter.post('/',(req, res, next)=>{
        let FacultyData = req.body

            if(!Username)
            {
                res.status(401).send("Invalid Username");
                console.log('login failed username')

            }else
            if (Username == FacultyData.username && Password == FacultyData.password)
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


// ************* faculty Student Section Routes Starts Here ***************\\

// ************* faculty Student List loading ***************\\

facultyRouter.get('/student',(req, res, next)=>{
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

// ************* faculty New Student Details Creating Routes ***************\\

facultyRouter.post('/student/addstudent',(req, res, next)=>{
    var std =new Studentdata({
        name:req.body.name,
        classname:req.body.classname,
        username:req.body.username,
        email:req.body.email,
        regno:req.body.regno,
        password:req.body.password
    });
    std.save((err, doc)=>{
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

// ************* faculty Single Student Details Routes ***************\\

facultyRouter.get('/student/:id',(req, res)=>{
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

// ************* faculty Single Student Details Updating Routes ***************\\

facultyRouter.put("/student/:id",(req, res)=>{
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

// ************* Faculty Single Student Details Deleting Routes ***************\\

facultyRouter.delete("/student/:id",(req, res)=>{
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

// ************* Faculty Student Section Routes Ends Here ***************\\

// ********** Faculty Timetable Section Routes Starts Here *************\\

// ************* faculty Creating New Timetable Routes ***************\\

facultyRouter.post('/timetable/addtimetable',(req, res, next)=>{
    var tt =new Timetabledata({
        classname:req.body.classname,
        mperiod1:req.body.mperiod1,
        mperiod2:req.body.mperiod2,
        mperiod3:req.body.mperiod3,
        mperiod4:req.body.mperiod4,
        tuperiod1:req.body.tuperiod1,
        tuperiod2:req.body.tuperiod2,
        tuperiod3:req.body.tuperiod3,
        tuperiod4:req.body.tuperiod4,
        weperiod1:req.body.weperiod1,
        weperiod2:req.body.weperiod2,
        weperiod3:req.body.weperiod3,
        weperiod4:req.body.weperiod4,
        thperiod1:req.body.thperiod1,
        thperiod2:req.body.thperiod2,
        thperiod3:req.body.thperiod3,
        thperiod4:req.body.thperiod4,
        frperiod1:req.body.frperiod1,
        frperiod2:req.body.frperiod2,
        frperiod3:req.body.frperiod3,
        frperiod4:req.body.frperiod4,
    });
    tt.save((err, doc)=>{
        if(!err)
        {
            console.log(doc);
        }
        else
        {
            console.log("Error in Timetable saving "+ JSON.stringify(err, undefined, 2));
        }
    });
});

// ************* faculty Timetable List loading ***************\\

facultyRouter.get('/timetable',(req, res, next)=>{
    Timetabledata.find((err, docs)=>{
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            console.log("Error in retreving Timetable" + JSON.stringify(err, undefined, 2));
        }
    })
});

// ************* faculty Single Timetable Details Udating Routes ***************\\

facultyRouter.put("/timetable/:id",(req, res)=>{
    if(!ObjectId.isValid(req.params.id))
    {
        return res.status(400).send(`No Record with same id: ${req.params.id}`);
    }
    
        var tt = {
            classname:req.body.classname,
            mperiod1:req.body.mperiod1,
            mperiod2:req.body.mperiod2,
            mperiod3:req.body.mperiod3,
            mperiod4:req.body.mperiod4,
            tuperiod1:req.body.tuperiod1,
            tuperiod2:req.body.tuperiod2,
            tuperiod3:req.body.tuperiod3,
            tuperiod4:req.body.tuperiod4,
            weperiod1:req.body.weperiod1,
            weperiod2:req.body.weperiod2,
            weperiod3:req.body.weperiod3,
            weperiod4:req.body.weperiod4,
            thperiod1:req.body.thperiod1,
            thperiod2:req.body.thperiod2,
            thperiod3:req.body.thperiod3,
            thperiod4:req.body.thperiod4,
            frperiod1:req.body.frperiod1,
            frperiod2:req.body.frperiod2,
            frperiod3:req.body.frperiod3,
            frperiod4:req.body.frperiod4,
        };
        Timetabledata.findByIdAndUpdate(req.params.id, { $set:tt },{ new:true },(err, doc)=>{
            if(!err)
            {
                res.send(doc);
            }
            else
            {
                console.log("Error in Timetable update"+ JSON.stringify(err, undefined, 2));
            }
        });
});

// ************* Faculty Single Timetable Details Deleting Routes ***************\\

facultyRouter.delete("/timetable/:id",(req, res)=>{
    if(!ObjectId.isValid(req.param.id))
        // return res.status(400).send(`No Record with same id: ${req.params.id}`);
    Timetabledata.findByIdAndRemove(req.params.id,(err, doc)=>{
            if(!err)
            {
                res.send(doc);
            }
            else
            {
                console.log("Error in Timetable Delete"+ JSON.stringify(err, undefined, 2));
            }
        });
});


module.exports = facultyRouter;




