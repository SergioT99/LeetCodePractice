function mergeTwoLists(list1, list2) {

    const dummy = new ListNode(-Infinity);
    let previous = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            previous.next = list1;
            previous = list1;
            list1 = list1.next;
        } else {
            previous.next = list2;
            previous = list2;
            list2 = list2.next;
        }
    }
    if (!list1) {
        previous.next = list2;
    }
    if (!list2) {
        previous.next = list1;
    }



    return dummy.next;

};
