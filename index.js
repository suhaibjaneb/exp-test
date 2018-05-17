var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/search',function(req,res){
    console.log(req.query.q);
  res.send(`you searched for ${req.query.q}\n`);
});
app.post('/login',function(req,res){
    console.log(req.body);
  var user_name=req.body.username;
  var password=req.body.password;
  res.send(`welcome ${user_name} \npassword is ${password}\n`);
  res.end("yes");
});
app.listen(9000,function(){
  console.log("test running");
});
//comment