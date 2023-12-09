const connection = require('./connection');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var app = express();
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
  };
  
  app.use(cors(corsOptions));
  
app.use(bodyParser.json())

app.options('*', cors());


app.get('/employees',(req,res)=>{
    connection.query('SELECT * FROM employee',(err,rows)=>{
        if(err){
            console.log(err);
        }else{
           // console.log(rows);
           res.send(rows);
        }
    })
})

app.get('/employees/:id',(req,res)=>{
    connection.query('SELECT * FROM employee WHERE id=?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            console.log(rows);
           res.send(rows[0]);
        }
    })
})

app.delete('/employees/:id',(req,res)=>{
    connection.query('DELETE FROM employee WHERE id=?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
           // console.log(rows);
           res.send(rows);
        }
    })
})

app.post('/employees',(req,res)=>{
    var emp = req.body
    var empData = [emp.first_name,emp.last_name,emp.salary]
    connection.query('INSERT INTO employee(first_name,last_name,salary) values(?)',[empData],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
           // console.log(rows);
           res.send(rows);
        }
    })
})

app.patch('/employees',(req,res)=>{
    var emp = req.body
    connection.query('UPDATE employee SET ? WHERE id='+emp.id,[emp],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
           // console.log(rows);
           res.send(rows);
        }
    })
})
app.listen(5000,()=> console.log("express server is running on port 5000"));

