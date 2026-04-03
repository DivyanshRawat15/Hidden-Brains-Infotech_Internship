var args = process.argv;
var command = args[2];
function printTriangle(height) {
    for (var i = 1; i <= height; i++) {
        var row = "";
        for (var j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}
/* Call */
printTriangle(5);