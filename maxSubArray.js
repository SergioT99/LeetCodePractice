function maxSubArray(nums) {

    if (nums.length === 1) {
        return nums[0];
    };

    let maxSubArrayValue = nums[0];
    let prevSum = nums[0];

    for(let i = 1; i < nums.length; i++){

        let calculation = Math.max(nums[i], prevSum + nums[i]);
        if(calculation > maxSubArrayValue){
            maxSubArrayValue = calculation;
        }
        prevSum = calculation;

    }

    return maxSubArrayValue;

};
