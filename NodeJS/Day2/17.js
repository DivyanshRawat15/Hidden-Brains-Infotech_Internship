var args = process.argv;
var command = args[2];
function customDeepCopy(obj) {
    var copy = {};
    for (var key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            copy[key] = customDeepCopy(obj[key]);
        } else {
            copy[key] = obj[key];
        }
    }
    return copy;
}
/* Call */
var original = {
    name: "Ravi",
    address: { city: "Surat" }
};
var cloned = customDeepCopy(original);
console.log(cloned);