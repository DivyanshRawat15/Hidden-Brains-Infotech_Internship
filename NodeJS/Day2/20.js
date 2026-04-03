var args = process.argv;
var command = args[2];
function areObjectsEqual(obj1, obj2) {
    var count1 = 0;
    var count2 = 0;
    for (var key in obj1) {
        count1++;
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    for (var key in obj2) {
        count2++;
    }
    if (count1 !== count2) {
        return false;
    }
    return true;
}
/* Call */
var objA = { name: "Sam", age: 20 };
var objB = { name: "Sam", age: 20 };
console.log(areObjectsEqual(objA, objB));
var objC = { name: "Sodium", age: 30};
console.log(areObjectsEqual(objA, objC));