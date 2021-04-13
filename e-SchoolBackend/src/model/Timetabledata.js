// Accessing mongoose Package
const mongoose = require('mongoose');
var objectId=require('mongodb').ObjectID


// Database Connection
mongoose.connect("mongodb://localhost:27017/eSchool");

// Schema Definition
const Schema = mongoose.Schema;

// Timetable Schema
const TimetableSchema = new Schema({
    classname:{type:String, unique:true, required:true},
    mperiod1:{type:String, required:true},
    mperiod2:{type:String, required:true},
    mperiod3:{type:String, required:true},
    mperiod4:{type:String, required:true},
    tuperiod1:{type:String, required:true},
    tuperiod2:{type:String, required:true},
    tuperiod3:{type:String, required:true},
    tuperiod4:{type:String, required:true},
    weperiod1:{type:String, required:true},
    weperiod2:{type:String, required:true},
    weperiod3:{type:String, required:true},
    weperiod4:{type:String, required:true},
    thperiod1:{type:String, required:true},
    thperiod2:{type:String, required:true},
    thperiod3:{type:String, required:true},
    thperiod4:{type:String, required:true},
    frperiod1:{type:String, required:true},
    frperiod2:{type:String, required:true},
    frperiod3:{type:String, required:true},
    frperiod4:{type:String, required:true},
}, {timestamps: true})
// Model Creation
var Timetabledata = mongoose.model('timetable', TimetableSchema);
module.exports = Timetabledata;
