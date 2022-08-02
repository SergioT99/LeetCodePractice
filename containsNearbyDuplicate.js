function containsNearbyDuplicate(nums, k) {

    if(nums.length < 2){return false;};
    
    let pointer = 0;


    for (let i = pointer + 1; i < nums.length; i++) {
        if (nums[pointer] === nums[i] && Math.abs(pointer - i) <= k) {
            return true;
        } else if (i === nums.length - 1) {
            pointer = pointer + 1;
            i = pointer;
            if (pointer === nums.length - 1) {
                return false;
            }
        }
    }


};
