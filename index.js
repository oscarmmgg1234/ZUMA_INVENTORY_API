const express = require('express')
const https = require("https");
const fs = require('fs');
const path = require("path");
const env = require("./env.json")
const {request} = require("./models/model_interface/request_class");
const {db} = require("./worker_api/db_interface")
var bodyParser = require('body-parser')

const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
  };
  
const sslServer = https.createServer(sslOptions, server);

const server = express();
const request_model = new request();
const DB = new db();

//request parsing
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

//pipeline 


//middleware
server.use('/ZUMAINVENTORYAPI/update_inventory',(req,res,next)=>{
    request_model.p_i_u_model(req.body,(data)=>{req.request = data;})
    if(req.request.validate()){
        next();
    }
    else{
        res.send("error");
    }
})
server.use('/ZUMAINVENTORYAPI/get_stock_product', (req,res,next)=>{
    request_model.p_s_model(req.body,(data)=>{req.request = data;})
    if(req.request.validate()){
        next();
    }
    else{
        res.send("error");
    }
})

//server endpoints
server.post('/ZUMAINVENTORYAPI/get_product_list',(req,res)=>{
    DB.get_product_list((data)=>res.send(data));
})

server.post('/ZUMAINVENTORYAPI/get_product_list_count',(req,res)=>{
    DB.get_pro_list_count((data)=>{res.send(data)});
})

server.post('/ZUMAINVENTORYAPI/get_inventory_list', (req, res)=>{
    DB.get_inv_list((data)=>res.send(data));
})

server.post('/ZUMAINVENTORYAPI/update_inventory', (req,res)=>{
    DB.update_inv([req.body.PRODUCT_ID, req.body.UPDATE_QUANTITY]);
    res.send("product quantity updated")
})

server.post('/ZUMAINVENTORYAPI/get_stock_product', (req,res)=>{
    DB.get_pro_stock(args, (data)=>res.send(data));
})

//poll
sslServer.listen(env.server_port,()=>{console.log(`Listening on port: ${env.server_port}`)})