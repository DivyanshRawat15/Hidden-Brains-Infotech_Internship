var args = process.argv;
var command = args[2];
/* 16. Find Current Day using Switch */
function currentDay() {

    var d = new Date();
    var day = d.getDay();

    switch (day) {

        case 0: console.log("Sunday"); break;
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;

    }
}
currentDay();