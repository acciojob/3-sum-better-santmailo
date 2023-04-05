function threeSum(arr, target) {
// write your code here
nums.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = Infinity; // Initialize closest sum to positive infinity

  // Loop through each number in the array
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1; // Set left pointer to i+1
    let right = nums.length - 1; // Set right pointer to end of array

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
