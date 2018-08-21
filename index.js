const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000 ;

var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

//enrutar
app.get('/', (req, res) => res.render('home'));


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


//
//app.set('port',process.env.PORT || 3000);
//
//
//
////routing
//app.get('/', function(req,res){
//  res.type('test/plain');
//  res.send('mi pagina principal');
//});
//
//app.get('/about', function(req,res){
//  res.type('test/plain');
//  res.send('acerca de mi pagina principal');
//});
//
//app.get('/about/contact', function(req,res){
//  res.type('test/plain');
//  res.send('Contactenos de mi pagina principal');
//});
//
//
//// 404 page
//app.use( function(req,res){
//  res.type('text/plain');
//  res.status(404);
//  res.send('404 - Not found');
//});
//
////500 error page
//app.use(function(err,req,res,next){
//  console.error(err.stack);
//  res.type('test/plain');
//  res.status(500);
//  res.send('500 - server error');
//});
////routing
//app.get('/', function(req,res){
//  res.type('test/plain');
//  res.send('mi pagina principal');
//});
//
//app.get('/about', function(req,res){
//  res.type('test/plain');
//  res.send('acerca de mi pagina principal');
//});
//
//app.get('/about/contact', function(req,res){
//  res.type('test/plain');
//  res.send('Contactenos de mi pagina principal');
//});
//
//
//// 404 page
//app.use( function(req,res){
//  res.type('text/plain');
//  res.status(404);
//  res.send('404 - Not found');
//});
//
////500 error page
//app.use(function(err,req,res,next){
//  console.error(err.stack);
//  res.type('test/plain');
//  res.status(500);
//  res.send('500 - server error');
//});
//
//app.listen(app.get('port'),function(){
//    console.log('express on localhost:' + app.get('port'));
//    
//});
