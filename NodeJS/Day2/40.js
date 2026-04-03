var args = process.argv;
var command = args[2];
function customBinarySearch(array, target) {
    var left = 0;
    var right = array.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return mid;
        }
        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
/* Call */
var arr = [2,4,6,8,10];
var arr2 = [1,12,21,32,45,66,99];
console.log(arr);
console.log(customBinarySearch(arr, 8));
console.log(arr2);
console.log(customBinarySearch(arr2, 32));