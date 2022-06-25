function reverse(x) {
    
    let signHolder = "";
    let xHolder = x.toString();
    let reverseX = "";

    if (x < 0) {
        signHolder = xHolder.charAt(0);
        reverseX = reverseX.concat(signHolder);
        for (let i = xHolder.length - 1; i > 0; i--) {
            reverseX = reverseX.concat(xHolder[i]);
        };
    }else{
        for (let i = xHolder.length - 1; i >= 0; i--) {
            reverseX = reverseX.concat(xHolder[i]);
        };
    }

    if(parseInt(reverseX) > Math.pow(2,31) - 1 || parseInt(reverseX) < Math.pow(-2, 31)){
        return 0;
    }else{
        return parseInt(reverseX);
    }

};
