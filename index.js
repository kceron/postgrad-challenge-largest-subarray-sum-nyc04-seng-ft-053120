function largestSubarraySum(arr) {
  let curr_max = 0, maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    curr_max = Math.max(0, curr_max + arr[i]);
    maxSum = Math.max(curr_max, maxSum);
  }
  return maxSum;
}
