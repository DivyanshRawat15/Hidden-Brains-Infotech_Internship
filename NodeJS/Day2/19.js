var args = process.argv;
var command = args[2];
function getObjectValues(obj) {
    var values = [];
    var index = 0;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            values[index] = obj[key];
            index++;
        }
    }
    return values;
}
/* Call */
var person = {
    name: "Amit",
    age: 21,
    city: "Mumbai"
};
var student = {
    name: "Sattu",
    age: 22,
    city: "Ahmedabad",
    SchoolName: "DPS"
};
console.log(getObjectValues(person));
console.log(getObjectValues(student));