function searchInsert(nums, target) {
    let targetIndex = 0;

    if(nums.includes(target)){
        return nums.indexOf(target);
    }

    for(let i = 0; i < nums.length; i++){
        if(nums[i] < target){
            if(nums[i+1] > target){
                targetIndex = i + 1;
            };
            if(i === nums.length - 1 && nums[i] < target){
                targetIndex = nums.length;
            }
        };
    }
    return targetIndex;
};
