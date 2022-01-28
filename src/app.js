const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const views = path.join(__dirname, "../views");
const partial_path = path.join(__dirname, "../views/partials");


app.set("view engine","hbs");
app.set("views",views);
hbs.registerPartials(partial_path);




app.use(express.static(static_path));
app.get("/",(req,res)=>{
    res.render("index");

});
app.get("/about",(req,res)=>{
    res.render("about");

});
app.get("/contact",(req,res)=>{
    res.render("contact");

});

app.get("/weather",(req,res)=>{
    res.render("weather");

});
app.get("/*",(req,res)=>{
    res.render("404error");

});



app.listen(port, ()=>{
    console.log(`listening to the port no ${port}`);
});