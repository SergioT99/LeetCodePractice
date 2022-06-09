function romanToInt(string) {

        const roman_numeral_I = 1;
        const roman_numeral_IV = 4;
        const roman_numeral_V = 5;
        const roman_numeral_IX = 9;
        const roman_numeral_X = 10;
        const roman_numeral_XL = 40;
        const roman_numeral_L = 50;
        const roman_numeral_XC = 90;
        const roman_numeral_C = 100;
        const roman_numeral_CD = 400;
        const roman_numeral_D = 500;
        const roman_numeral_CM = 900;
        const roman_numeral_M = 1000;

    let holdAllNumerals = [];

    for (let j = 0; j < string.length; j++) {
        if (string.charAt(j) === "I" && string.charAt(j + 1) === "V") {
            holdAllNumerals.push(roman_numeral_IV);
            j = j + 1;
        } else if (string.charAt(j) === "I" && string.charAt(j + 1) === "X") {
            holdAllNumerals.push(roman_numeral_IX);
            j = j + 1;
        } else if (string.charAt(j) === "X" && string.charAt(j + 1) === "L") {
            holdAllNumerals.push(roman_numeral_XL);
            j = j + 1;
        } else if (string.charAt(j) === "X" && string.charAt(j + 1) === "C") {
            holdAllNumerals.push(roman_numeral_XC);
            j = j + 1;
        } else if (string.charAt(j) === "C" && string.charAt(j + 1) === "D") {
            holdAllNumerals.push(roman_numeral_CD);
            j = j + 1;
        } else if (string.charAt(j) === "C" && string.charAt(j + 1) === "M") {
            holdAllNumerals.push(roman_numeral_CM);
            j = j + 1;
        } else if (string.charAt(j) === "I") {
            holdAllNumerals.push(roman_numeral_I); 
        } else if (string.charAt(j) === "V") {
            holdAllNumerals.push(roman_numeral_V);
        } else if (string.charAt(j) === "X") {
            holdAllNumerals.push(roman_numeral_X);
        } else if (string.charAt(j) === "L") {
            holdAllNumerals.push(roman_numeral_L);
        } else if (string.charAt(j) === "C") {
            holdAllNumerals.push(roman_numeral_C);
        } else if (string.charAt(j) === "D") {
            holdAllNumerals.push(roman_numeral_D);
        } else if (string.charAt(j) === "M") {
            holdAllNumerals.push(roman_numeral_M);
        } else{
            return `No valid selections`;
        }
    }
    console.log(holdAllNumerals);
    return holdAllNumerals.reduce(function(acc, val) { return acc + val; }, 0);

};
