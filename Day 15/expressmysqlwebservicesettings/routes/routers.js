const express=require("express");
var myrouter=express.Router();
//connection is same as mysqlconnection in dbconnet.js
var connection=require("../db/dbconnect")

//to display all products in tabular form
myrouter.get("/products",function(req,resp){
    connection.query("select * from product",(err,data,fileds)=>{
        if(err){
            resp.status(500).send("no data found");
        }
        else{
            console.log(data);
            console.log(fileds);
            resp.send(data);
        }
    })

});
myrouter.get("/products/:pid",function(req,resp){
    connection.query("select * from product where pid=?",req.params.pid,(err,data,fileds)=>{
        if(err){
            resp.status(500).send("no data found");
        }
        else{
            console.log(data);
            console.log(fileds);
            resp.send(data[0]);
        }
    })

});


//to add new product in the table
myrouter.post("/products/product/:pid",function(req,resp){
    console.log(req.body);
    connection.query("insert into product values(?,?,?,?)",[req.body.pid,req.body.pname,req.body.qty,req.body.price],(err,result)=>{
        if(err){
            resp.status(500).send("no data added");
        }else{
            console.log(result);
            resp.send("added successfully");
        }

    })
});

myrouter.delete("/products/:prodid",function(req,resp){
    connection.query("delete from product where pid=?",[req.params.prodid],(err,result)=>{
        if(err){
            resp.status(500).send("no data deleted");
        }else{
            resp.send("data deleted successfully")
        }
    })
})


//to update product in the table
myrouter.put("/products/product/:pid",function(req,resp){
    connection.query("update product set pname=?,qty=?,price=? where pid=?",[req.body.pname,req.body.qty,req.body.price,req.body.pid],(err,result)=>{
        if(err){
            resp.status(500).send("no data added");
        }else{
            console.log(result);
            resp.send("updates successfully");
        }

    })
});


//it will pass the reference of myrouter in router variable of app.js file
module.exports=myrouter;