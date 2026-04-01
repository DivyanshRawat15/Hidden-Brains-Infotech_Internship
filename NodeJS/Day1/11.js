var args = process.argv;
var command = args[2];
/* 11. Find Position in Array */
function findPosition(arrStr, target) {

    var arr = arrStr.split(",");
    var count = 0;
    var index = -1;

    for (var i = 0; i < arr.length; i++) {

        if (Number(arr[i]) === Number(target)) {
            count++;
            index = i;
        }
    }

    if (count === 0) console.log(-1);
    else if (count === 1) console.log(index);
    else console.log(2);
}
findPosition("[1, 23, 32, 49, 51, 98, 78, 61, 12]", 51);