var args = process.argv;
var command = args[2];
function removeSpaces(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }
    return result;
}
/* Call */
console.log(removeSpaces("Hello    World     JavaScript"));