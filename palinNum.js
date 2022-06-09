function isPalindrome(x) {

    const newString = x.toString();
    let reversedString = "";

    for(let i = newString.length - 1; i >= 0; i--){
        reversedString = reversedString.concat(newString[i]);
    };

    if(newString === reversedString){
        return true;
    } else{
        return false;
    }

    
};
