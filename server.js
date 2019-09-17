//dependencies

var express=require ("express");
var exphbs= require("express-handlebars");

//create an app

var app =express();

//create PORT 

var PORT =process.env.PORT|| 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Data 
var icecreams = [
    { name: "vanilla", price: 10, awesomeness: 3 },
    { name: "chocolate", price: 4, awesomeness: 8 },
    { name: "banana", price: 1, awesomeness: 1 },
    { name: "greentea", price: 5, awesomeness: 7 },
    { name: "jawbreakers", price: 6, awesomeness: 2 },
    { name: "vanilla", price: 10, awesomeness: 3 }
  ];
  
//Routes 
app.get("/icecreams/:name", function(req, res) {
    for (var i = 0; i < icecreams.length; i++) {
      if (icecreams[i].name === req.params.name) {
        return res.render("icecream", icecreams[i]);
      }
    }
});
    app.get("/icecreams", function(req, res) {
        res.render("ics", { ics: icecreams });
      });
      
    

//start your server

app.listen(PORT,function(){
    console.log("app is listening on PORT")
});
