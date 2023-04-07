const express =require("express");
const bodyParser = require("body-parser");

const app =express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){
  var height= parseFloat(req.body.height);
  var weight= parseFloat(req.body.weight);
  var result= weight/(height*height);
  var bmi= result.toFixed(2);
  res.send("Your body mass index is :" + bmi);
});

app.listen(3000, function(){
  console.log("Server is hosting on port 3000");
});
