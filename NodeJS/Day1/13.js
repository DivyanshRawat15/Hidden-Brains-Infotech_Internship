var args = process.argv;
var command = args[2];
/* 13. Find Even Numbers from Array */
function evenFromArray(arrStr) {

    var arr = arrStr.split(",");

    for (var i = 0; i < arr.length; i++) {

        var num = Number(arr[i]);

        if (num % 2 === 0) {
            console.log(num);
        }
    }
}
evenFromArray("21, 98, 1, 56, 78, 23, 40");