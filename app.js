/* const http = require('http');
const hostname='127.0.0.1';
const port ='3000';
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    res.end('Hola mundo!\n');
});
server.listen(port,hostname,()=>{
    console.log(`Servidor esta corriendo sobre http://${hostname}:${port}`);
}); */

//version con express
var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send('Hola Mundo!');
});
app.listen(3000,function(){
    console.log('Aplicacion ejemplo, escuchando en el puerto 3000!');
});
