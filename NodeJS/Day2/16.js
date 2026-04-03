var args = process.argv;
var command = args[2];
function areAnagrams(str1, str2) {
    var freq = {};
    for (var i = 0; i < str1.length; i++) {
        var ch = str1[i];
        if (freq[ch] === undefined) {
            freq[ch] = 1;
        } else {
            freq[ch]++;
        }
    }
    for (var j = 0; j < str2.length; j++) {
        var ch2 = str2[j];
        if (freq[ch2] === undefined) {
            return false;
        }
        freq[ch2]--;
    }
    for (var key in freq) {
        if (freq[key] !== 0) {
            return false;
        }
    }
    return true;
}
/* Call */
console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("stormy", "Hurricane"));