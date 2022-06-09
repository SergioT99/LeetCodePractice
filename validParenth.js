function isValid(string){

    let bracket = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    let result = [];

    for (let char of string){
        if (bracket[char]){
            result.push(bracket[char])
        }else if(result.pop() !== char){
            return false;
        }
    }
    return (!result.length);
}
