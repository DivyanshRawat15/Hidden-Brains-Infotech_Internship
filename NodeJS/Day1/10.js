var args = process.argv;
var command = args[2];
/* 10. Repeated Character Count */
function repeatedChars(str) {

    var counts = {};

    for (var i = 0; i < str.length; i++) {

        var ch = str[i];

        if (counts[ch] === undefined) {
            counts[ch] = 1;
        } else {
            counts[ch] = counts[ch] + 1;
        }
    }

    for (var key in counts) {
        if (counts[key] > 1) {
            console.log(key + " -> " + counts[key]);
        }
    }
}
repeatedChars("helloworld");