// Accessing mongoose Package
const mongoose = require('mongoose');
var objectId=require('mongodb').ObjectID;


// Database Connection
mongoose.connect("mongodb://localhost:27017/eSchool");

const Schema = mongoose.Schema;

// Student Schema
const StudentSchema = new Schema({
    name:{
        type: String
    },
    classname:{
            type:String
    },
    username:{
        type: String,
        unique:true
    },
    email:{
        type: String
    },
    regno:{
        type: String,
        unique:true
    },
    password:{
        type: String
    }
}, {timestamps: true})

// Model Creation
var Studentdata = mongoose.model('studentdata',StudentSchema);
module.exports = Studentdata;
