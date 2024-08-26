const mongoose = require('mongoose')

const StaffSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    city:String,
    password:String
})

const StaffModel = mongoose.model('register',StaffSchema)

module.exports = StaffModel