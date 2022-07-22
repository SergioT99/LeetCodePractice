function isPalindrome(s){

    const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";

    let updateString = s.trim().toLowerCase();

    let resultString = "";
    let reversedResultString = "";

    for(let i = 0; i < updateString.length; i++){
        if(alphabet.includes(updateString[i])){
            resultString = resultString.concat(updateString[i]);
        };
    };
    
    for( let j = resultString.length - 1; j >= 0; j--){
        reversedResultString = reversedResultString.concat(resultString[j]);
    }

    if(resultString === reversedResultString){ 
        return true;
    }else{
        return false;
    }
};
