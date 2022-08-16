const express = require("express");
const cors = require("cors");
const app = express();

//base variables
const PORT = process.env.port || 8072;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use(express.static("public"));

app.use(function(req,res){
    res.render("404");
});

app.listen( PORT, function() { 
    console.log(`Server listenning on http://127.0.0.1:${PORT}`);
});