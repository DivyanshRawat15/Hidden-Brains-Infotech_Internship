var args = process.argv;
var command = args[2];
/* 12. Leaders in Array */
function leaders(arrStr) {

    var arr = arrStr.split(",");
    console.log(arr);
    var maxRight = Number(arr[arr.length - 1]);

    console.log(maxRight);

    for (var i = arr.length - 2; i >= 0; i--) {

        var val = Number(arr[i]);

        if (val >= maxRight) {
            console.log(val);
            maxRight = val;
        }
    }
}
leaders("91, 11, 4, 53, 77, 99, 54, 3");