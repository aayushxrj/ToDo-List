const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.get('/', (req, res) => {

    var today = new Date();

    //displaying day
    // var currentDay = today.getDay();
    // var day = dayName(currentDay);;
    var options = {
        weekday: "long",
        day : "numeric",
        month:"long"
    };
    var day = today.toLocaleDateString("en-US", options);
     

    res.render("list", { kindOfDay: day,
                         newListItems: items });
});

app.post("/", function(req, res){
    var item = req.body.newItem;
    // console.log(item);

    // res.refer // add to one render
    items.push(item);
    res.redirect("/");
})

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