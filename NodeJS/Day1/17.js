var args = process.argv;
var command = args[2];
/* 17. Custom Sort (Bubble Sort) */
function customSort(arrStr) {

    var arr = arrStr.split(",");
    console.log("Original Array : " + arr);

    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < arr.length - i - 1; j++) {

            if (Number(arr[j]) > Number(arr[j + 1])) {

                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    console.log(arr);
}
customSort("2, 54, 99, 34, 58, 61, 11");