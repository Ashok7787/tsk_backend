const mysql = require('mysql2');


var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Admin@123',
    database:'employeedb'
})
 mysqlConnection.connect((err)=>{
    if(err){
        console.log("Error in db Connection:"+JSON.stringify(err,undefined,2));
    }else{
        console.log("DB Connected successfully");
    }
})
module.exports = mysqlConnection;