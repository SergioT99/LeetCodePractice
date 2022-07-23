function containsDuplicate(nums) {

    if(nums.length === 1 || nums.length < 2){
        return false;
    }
    let pointer = 0;

    while (pointer < nums.length) {
        for (let i = pointer + 1; i < nums.length; i++) {
            if (nums[pointer] === nums[i]) {
                return true;
            } else if (i === nums.length - 1) {
                pointer = pointer + 1;
                if (pointer === nums.length - 1) {
                    return false;
                }
            }
        }
    }
};
