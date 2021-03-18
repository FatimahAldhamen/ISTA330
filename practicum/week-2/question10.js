/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function (n) {
    var str = n.toString();
    var highest = str[0]; var lowest = str[0];
    for (let i = 1; i < str.length; i++) {
        if (str[i] < lowest) {
            lowest = str[i];
        }
        if (str[i] > highest) {
            highest = str[i];
        }
    }
    return parseInt(highest) - parseInt(lowest);
};