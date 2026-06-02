
const express=require('express');
const cors=require('cors');
const mysql=require('mysql2');

const app=express();
app.use(cors());

const db=mysql.createConnection({
 host:'RDS-ENDPOINT',
 user:'admin',
 password:'password',
 database:'bookstore'
});

app.get('/books',(req,res)=>{
 db.query('SELECT * FROM books',(err,result)=>{
   if(err) return res.status(500).json(err);
   res.json(result);
 });
});

app.listen(3000,()=>console.log('API running on 3000'));
