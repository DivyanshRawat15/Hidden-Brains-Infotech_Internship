var args = process.argv;
var command = args[2];
/* 14. Time Based Greeting */
function greeting() {

    var d = new Date();
    var hour = d.getHours();

    if (hour < 10) {
        console.log("Good Morning");
    } else {
        console.log("Good Day");
    }
}
greeting();