// Accessing mongoose Package
const mongoose = require('mongoose');
var objectId=require('mongodb').ObjectID


// Database Connection
mongoose.connect("mongodb://localhost:27017/eSchool");

// Schema Definition
const Schema = mongoose.Schema;

// Faculty Schema
const FacultySchema = new Schema({
    name:{
        type: String
    },
    username:{
        type: String,
        unique:true
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
}, {timestamps: true})

// Model Creation
var Facultydata = mongoose.model('facultydata', FacultySchema);
module.exports = Facultydata;
