const express = require("express");
const path = require("path");
const cors = require("cors");
const ejs_layouts = require("express-ejs-layouts");
const app = express();

//PORT
const PORT = process.env.port || 8072;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

//Setup templating engine
app.use(ejs_layouts);
app.set("view engine", "ejs");
app.set("views", "views");

app.get("", function(req,res) {
    res.render("index");
})
app.get("/about", function(req,res) {
    res.render("about");
})
app.get("/contact", function(req,res) {
    res.render("contact");
})

//Setup static files
app.use(express.static(path.join(__dirname,"/public")));

app.use(function(req,res){
    res.render("404");
});

app.listen( PORT, function() { 
    console.log(`Server listenning on http://127.0.0.1:${PORT}`);
});