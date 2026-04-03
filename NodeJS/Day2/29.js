var args = process.argv;
var command = args[2];
function uniqueCharacters(str) {
    var freq = {};
    for (var i = 0; i < str.length; i++) {
        var ch = str[i];
        if (freq[ch] === undefined) {
            freq[ch] = 1;
        } else {
            freq[ch]++;
        }
    }
    for (var key in freq) {
        if (freq[key] === 1) {
            console.log(key);
        }
    }
}
/* Call */
uniqueCharacters("programming");