//add all libraries
const express=require("express");
const app=express();
const path=require("path");
const bodyparser=require('body-parser');
//all url handling(routing) details will be written in this file
const routes=require("./routes/routers")
//configure the application, to allow access from 
//react application
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//add middlewares
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
//pass the control to router for handling url
app.use("/",routes);
//start the server
app.listen(9191,function(){
    console.log("server started at prot 9191")
});

//it will make all the setting and configuration accessible in 
//all the files
module.exports=app;