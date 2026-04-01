var args = process.argv;
var command = args[2];
/* 8. Reverse String */
function reverseString(str) {
    var result = "";

    for (var i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }

    console.log(result);
}
reverseString("This is a String.");