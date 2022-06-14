function lengthOfLongestSubstring(string) {

    let tempArray = [];
    let resultArray = [];
    let i = 0;

    if (string.length < 1) {
        return 0;
    }


    for (let rightPointer = i; rightPointer < string.length; rightPointer++) {
        if (!tempArray.includes(string.charAt(rightPointer))) {
            tempArray.push(string.charAt(rightPointer));
            //console.log(tempArray);
            if (rightPointer === string.length - 1) {
                //tempArray.push(string.charAt(rightPointer));
                //console.log(tempArray);
                resultArray.push(tempArray.length);
            }
        } else if (tempArray.includes(string.charAt(rightPointer))) {
            i = i + 1;
            rightPointer = i;
            resultArray.push(tempArray.length);
            tempArray = [];
            tempArray.push(string.charAt(rightPointer));
        };
    }

    return Math.max(...resultArray);
};
