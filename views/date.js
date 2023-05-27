// console.log(module);
module.exports.getDate = getDate;

function getDate(){
    let today = new Date();

    let options = {
        weekday: "long",
        day : "numeric",
        month:"long"
    };
    let day = today.toLocaleDateString("en-US", options);
    return day;
};

module.exports.getDay = getDay;

function getDay(){
    let today = new Date();

    let options = {
        weekday: "long"
    };
    let day = today.toLocaleDateString("en-US", options);
    return day;
};


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