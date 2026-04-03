var args = process.argv;
var command = args[2];
function customSubstringCheck(mainString, subString) {
    for (var i = 0; i <= mainString.length - subString.length; i++) {
        var match = true;
        for (var j = 0; j < subString.length; j++) {
            if (mainString[i + j] !== subString[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return true;
        }
    }
    return false;
}
/* Call */
console.log(customSubstringCheck("javascript", "script"));