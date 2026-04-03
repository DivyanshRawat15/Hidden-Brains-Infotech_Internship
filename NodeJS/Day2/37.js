var args = process.argv;
var command = args[2];
function hasOwnProp(obj, key) {
    for (var prop in obj) {
        if (prop === key) {
            return true;
        }
    }
    return false;
}
/* Call */
var user = { name: "John", age: 30 };
console.log(hasOwnProp(user, "age"));
console.log(hasOwnProp(user, "city"));
console.log(hasOwnProp(user, "name"));