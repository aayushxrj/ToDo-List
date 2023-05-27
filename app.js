const express = require('express');
const bodyParser = require('body-parser');
const getDate = require('./views/date');
const date = require(__dirname+"/views/date.js");

const app = express();
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

// var items = ["Buy Food", "Cook Food", "Eat Food"];
let items = [];
let workItems = [];

app.get('/', (req, res) => {

    let day = date.getDate();     

    res.render("list", { listTitle: day,
                         newListItems: items });
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    if( req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    // console.log(req.body);
})

app.get("/work", function (req, res){
    res.render("list", {listTitle : "Work List",
                        newListItems : workItems})
})

// app.post("/work", function(req, res){
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// })

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(3000, () => {
    console.log('Server started on port 3000...');
}
);