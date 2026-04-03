var args = process.argv;
var command = args[2];
function customPadEnd(str, targetLength, padString) {
    if (padString === undefined) {
        padString = " ";
    }
    var result = str;
    while (result.length < targetLength) {
        for (var i = 0; i < padString.length && result.length < targetLength; i++) {
            result += padString[i];
        }
    }
    return result;
}
/* Call */
console.log(customPadEnd("JS", 6, "*"));