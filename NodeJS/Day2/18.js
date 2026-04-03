var args = process.argv;
var command = args[2];
function customObjectMerge(obj1, obj2) {
    var result = {};
    for (var key in obj1) {
        result[key] = obj1[key];
    }
    for (var key in obj2) {
        result[key] = obj2[key];
    }
    return result;
}
/* Call */
var a = { name: "John", age: 25 };
var b = { age: 30, city: "Delhi" };
console.log(customObjectMerge(a, b));