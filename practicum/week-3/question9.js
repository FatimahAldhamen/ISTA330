/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function (n) {
    var arr = new Array();
    var m = 0, count = 0;
    for (let i = 1, j = 0; i <= n; i++, j++) {
        arr[j] = new Array();
        arr[j][m] = i;
        if (j == 8) {
            j = -1;
            m++;
        }
    }
    var largest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= largest) {
            largest = arr[i].length;
        }

    } for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == largest) {
            count++
        }

    }
    return count;
};