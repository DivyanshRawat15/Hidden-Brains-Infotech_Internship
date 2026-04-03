var args = process.argv;
var command = args[2];
function findMissingNumber(array, n) {
    var expectedSum = (n * (n + 1)) / 2;
    var actualSum = 0;
    for (var i = 0; i < array.length; i++) {
        actualSum += array[i];
    }
    return expectedSum - actualSum;
}
/* Call */
var arr = [1,2,4,5];
console.log(arr);
console.log(findMissingNumber(arr, 5));