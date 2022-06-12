
function addTwoNumbers(l1, l2) {

    let newL1Array = [];
    let newL2Array = [];

    while (l1 !== null) {
        if (l1.val !== null) {
            newL1Array.push(l1.val);
            l1 = l1.next;
        }
    };
    
    while (l2 !== null){
        if (l2.val !== null) {
            newL2Array.push(l2.val);
            l2 = l2.next;
        }
    };


    let tempL1Array = newL1Array.reverse().join("");
    //console.log(tempL1Array);
    let tempL2Array = newL2Array.reverse().join("");
    //console.log(tempL2Array);
    let targetNum = BigInt(tempL1Array) + BigInt(tempL2Array);
    //console.log(targetNum);

    let targetNumResultArray = targetNum.toString().split('');
    let result = [];
    

    for (let i = 0; i < targetNumResultArray.length; i++) {
        result.push(parseInt(targetNumResultArray[i]));
    }
    result.reverse()
    
    let prevNode = new ListNode(result[0]);
    let headNode = prevNode;
    
    for(let j = 0; j < result.length; j++){
        const currNode = new ListNode(result[j]);
        prevNode.next = currNode;
        prevNode = currNode;
    }
    
    return headNode.next;
};
