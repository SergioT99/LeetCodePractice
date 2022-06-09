function removeElement(nums, val) {
    while (nums.includes(val)) {
        nums.splice(nums.indexOf(val), 1);
    }
    return console.log(nums);

};
