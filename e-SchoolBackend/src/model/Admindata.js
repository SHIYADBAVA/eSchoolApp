// Accessing mongoose Package
const mongoose = require('mongoose');
var objectId=require('mongodb').ObjectID


// Database Connection
mongoose.connect("mongodb://localhost:27017/eSchool");

// Schema Definition
const Schema = mongoose.Schema;
// Admin Schema
const AdminSchema = new Schema({
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
var Admindata = mongoose.model('admindata', AdminSchema);
module.exports = Admindata;

