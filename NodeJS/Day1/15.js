var args = process.argv;
var command = args[2];
/* 15. Random Number Divisibility */
function randomCheck() {

    var num = Math.floor(Math.random() * 11);

    console.log("Number: " + num);

    if (num % 3 === 0) console.log("Divisible by 3");
    else console.log("Not Divisible by 3");

    if (num % 4 === 0) console.log("Divisible by 4");
    else console.log("Not Divisible by 4");

    if (num % 7 === 0) console.log("Divisible by 7");
    else console.log("Not Divisible by 7");
}
randomCheck();