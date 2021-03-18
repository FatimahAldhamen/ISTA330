
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function (input) {
        var arr = new Array();
        for (let i = 0; i < input.length; i++) {
                arr[i] = new Array();
                for (let j = i; j >= 0; j--) {
                        arr[i][j] = input[j];
                }

        }
        for (let i = 0; i < arr.length; i++) {
                var sum = 0;
                var highest = 0;
                for (let j = 0; j < arr.length; j++) {
                        sum += arr[i][j];
                        if (sum < highest) {
                                highest = sum;
                        }
                }
        }
        console.log(arr);
        return arr;
};
