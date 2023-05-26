const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

// var items = ["Buy Food", "Cook Food", "Eat Food"];
let items = [];
let workItems = [];

app.get('/', (req, res) => {

    let today = new Date();

    //displaying day
    // var currentDay = today.getDay();
    // var day = dayName(currentDay);;
    let options = {
        weekday: "long",
        day : "numeric",
        month:"long"
    };
    let day = today.toLocaleDateString("en-US", options);
     

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

// function dayName(currentDay) {
//     var day = "";
//     switch (currentDay) {
//         case 0:
//             day = "Sunday"
//             break;
//         case 1:
//             day = "Monday"
//             break;
//         case 2:
//             day = "Tuesday"
//             break;
//         case 3:
//             day = "Wednesday"
//             break;
//         case 4:
//             day = "Thrusday"
//             break;
//         case 5:
//             day = "Friday"
//             break;
//         case 6:
//             day = "Saturday"
//             break;
//         default:
//             console.log("Error : current day is equal to " + currentDay);
//             break;
//     }
//     return day;
// }