var args = process.argv;
var command = args[2];
function customUppercase(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += str[i];
        }
    }
    return result;
}
/* Call */
console.log(customUppercase("hello world"));