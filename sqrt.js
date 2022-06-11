function mySqrt(x) {

    const evenNums = [2,4,6,8,10];
    const oddNums = [1,3,5,7,9];
    const evenSquaredChoices = [4, 16, 36, 64, 100];
    const oddSquaredChoices = [1, 9, 25, 49, 81];

    if(x === 0){
        return 0;
    };

    if (x % 2 === 0) {
        if(evenSquaredChoices.includes(x)){
            let neededIndex = 0;
            neededIndex = evenSquaredChoices.indexOf(x);
            return evenNums[neededIndex];
        }else{
            let newNum = Math.trunc(Math.sqrt(x));
            return newNum;
        }
    } else {
        if (oddSquaredChoices.includes(x)) {
            let newIndex = 0;
            newIndex = oddSquaredChoices.indexOf(x);
            return oddNums[newIndex];
        } else {
            let newNum = Math.trunc(Math.sqrt(x));
            return newNum;
        }
    }
};
