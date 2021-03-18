/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function (input, shuffleIndices) {
    var arrange = [];
    var str = '';
    for (let i = 0; i < input.length; i++) {
        arrange[shuffleIndices[i]] = input[i];
    }
    for (let i = 0; i < arrange.length; i++) {
        str += arrange[i];
    }
    return str;
};