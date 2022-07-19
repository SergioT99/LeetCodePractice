function singleNumber(nums) {

   const newArray = nums.sort(function (a, b) {
        return a - b
    });

    let i = 0;

    while (i < newArray.length) {
        if (newArray[i] === newArray[i + 1]) {
            i = i + 2;
            if (newArray[i] !== newArray[i + 1] || i === newArray.length - 1) {
                return newArray[i];
            }
        } else {
            return newArray[i];
        }
    }
};
