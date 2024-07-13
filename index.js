const express=require('express');
const app=new express();
const PORT=4000;
const employeeModel=require('./model/employeeData');
require('./connection');
//to fetch the movie data
app.get('/movies',async(req,res)=>{
    console.log('inside')
    try{
        const data= await employeeModel.find();
        res.send(data)
    } catch (error){
        console.log(error)
    }
})

app.listen(PORT,()=>{
    console.log('Server is running on PORT 4000')
})