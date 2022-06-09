function strStr(haystack, needle) {

    if (needle.length > haystack.length) {
        return -1;
    }

    if (!haystack.includes(needle)) {
        return -1;
    }

    if (haystack.length === 1 && needle.length === 1) {
        if (haystack.charAt(0) === needle.charAt(0)) {
            return 0;
        };
    }

    if(haystack.includes(needle)){
        return haystack.indexOf(needle);
    }

};
