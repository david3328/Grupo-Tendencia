var express=require('express');
var sassMiddleware = require('node-sass-middleware');
var app= express();


app.use(sassMiddleware({
  src:__dirname+'/public',
  dest:__dirname+'/public',
  debug:true,
  outputStyle:"compressed"
}));
app.use(express.static('public'));


app.set('view engine','jade');




app.get("/",function(req,res){
  res.render("index");
});

app.get("/registro",function(req,res){
  res.render("registro");
});

app.post("/postear",function(req,res){
  //registro articulao
});




app.listen(3030);
