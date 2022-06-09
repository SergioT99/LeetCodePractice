function removeDuplicates(nums) {
    if (nums.length === 0) {
        return console.log([]);
    };

    let leftPointer = 0;

    for (let rightPointer = leftPointer + 1; rightPointer < nums.length; rightPointer++) {
        if (nums[rightPointer] === nums[leftPointer]) {
            nums.splice(rightPointer, 1);
            rightPointer = leftPointer;
        } else if (nums[rightPointer] !== nums[leftPointer]) {
            leftPointer = leftPointer + 1;
        };
    };
    return console.log(nums);
}
