/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function (input) {
    var medianNumber;
    if (input.length % 2 != 0) {
        var mid = input.length / 2;
        medianNumber = input[Math.round(mid)];
    } else {
        var mid = input.length / 2;
        medianNumber = (input[Math.round(mid - 1)] + input[Math.round(mid)]) / 2
    }
    return medianNumber;
};