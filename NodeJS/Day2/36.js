var args = process.argv;
var command = args[2];
function getObjectEntries(obj) {
    var entries = [];
    var index = 0;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            entries[index] = [key, obj[key]];
            index++;
        }
    }
    return entries;
}
/* Call */
var person = { name: "Aman", age: 22 };
console.log(getObjectEntries(person));