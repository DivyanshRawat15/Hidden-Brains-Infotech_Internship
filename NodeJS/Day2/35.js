var args = process.argv;
var command = args[2];
function simulateDoWhile() {
    var i = 1;
    var firstRun = true;
    while (firstRun || i <= 10) {
        console.log(i);
        i++;
        firstRun = false;
    }
}
/* Call */
simulateDoWhile();