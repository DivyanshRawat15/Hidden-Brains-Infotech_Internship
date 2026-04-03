var args = process.argv;
var command = args[2];
function reverseWords(sentence) {
    var word = "";
    var result = "";
    for (var i = sentence.length - 1; i >= 0; i--) {
        if (sentence[i] === " ") {
            result += word + " ";
            word = "";
        } else {
            word = sentence[i] + word;
        }
    }
    result += word;
    return result;
}
/* Call */
console.log(reverseWords("I love Programming!"));