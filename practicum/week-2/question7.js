/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var min = function (a, b) {
       return (a < b) ? a : b;
};
var maxSumOfMins = function (input) {
       var pairs = [];
       var sum = 0;
       input.sort();
       for (var i = 0, j = 0; i < input.length; i += 2, j++) {
              pairs[j] = ([input[i], input[i + 1]]);
       }
       for (let i = 0; i < pairs.length; i += 2) {
              sum += min(pairs[i][0], pairs[i][1]) + min(pairs[i + 1][0], pairs[i + 1][1]);
       }
       return sum;
};