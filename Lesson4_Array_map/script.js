'use strict';
var arr = [1, 2, 3, 4, 5];

function map(fn, arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(square(arr[i]))
    }
    return newArr
}

function square(x) {
    return x * x;
}

console.log(map(square, arr));
console.log(arr);