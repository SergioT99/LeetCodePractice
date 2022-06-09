function twoSum(nums, target) {

    let leftPointer = 0;
    let rightPointer = 1;

    for (leftPointer = 0; leftPointer < nums.length; leftPointer++) {
        let t = target - nums[leftPointer];
        for (rightPointer = leftPointer + 1; rightPointer < nums.length; rightPointer++) {
            if (nums[rightPointer] === t) {
                const res = [leftPointer, rightPointer];
                return res;
            }
        }
    }
    return null;
}
