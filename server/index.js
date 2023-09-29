//servidor
var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer=require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://pedrosprandel:auladequinta@chimia.nviobmn.mongodb.net/?retryWrites=true&w=majority";
var DATABASE_NAME="aula7";
var database;  

app.listen(5038,()=>{
       MongoClient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASE_NAME);
        console.log("Conexao com Mongo DB Ativa");
       }) 
    })


//carrega dados mongodb
app.get('/api/aula7/GetQuarto',(req, res)=>{
   database.collection("aulaCollection").find({}).toArray((_,result)=>{res.send(result);
   });
})
