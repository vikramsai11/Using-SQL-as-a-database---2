const express=require('express');
const mysql2=require('mysql2');
const dotenv=require('dotenv');

dotenv.config();
const app=express();

const PORT=process.env.PORT || 3000;

const database=mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

database.connect((err)=>{
    if(err){
        console.error("mysql connection is failed");
        console.error(err.message);
        return;
    }
    console.log("connected successfully");
});


app.get('/',(req,res)=>{
    res.send("Express + Mysql is running successfully");
})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})
