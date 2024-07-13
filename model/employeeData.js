const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({
    employeeName:String,
    employeeSalary:Number,
    employeeDepartment:String,
    employeeExperience:Number
})
const MovieData=mongoose.model('employee',employeeSchema);
module.exports=MovieData
