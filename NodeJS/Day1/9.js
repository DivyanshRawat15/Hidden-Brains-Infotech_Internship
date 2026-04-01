var args = process.argv;
var command = args[2];
/* 9. Replace Word in String */
function replaceWord(sentence, instruction) {
    var oldWord = "";
    var newWord = "";
    var sepFound = false;
    for (var i = 0; i < instruction.length; i++) {
        if (instruction[i] === '|') {
            sepFound = true;
        } else {
            if (!sepFound) oldWord = oldWord + instruction[i];
            else newWord = newWord + instruction[i];
        }
    }
    var words = "";
    var current = "";
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            if (current === oldWord) {
                words = words + newWord + " ";
            } else {
                words = words + current + " ";
            }
            current = "";
        } else {
            current = current + sentence[i];
        }
    }
    if (current === oldWord) {
        words = words + newWord;
    } else {
        words = words + current;
    }
    console.log(words);
}
replaceWord("This is a World!", "World!|Bugatti");