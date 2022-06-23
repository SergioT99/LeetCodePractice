function isSameTree(p, q) {
    
    if (p === null && q === null)
        return true;
 
    // Return false if one is empty and other is not
    if (p === null || q === null)
        return false;

    
    if (!p && !q) {
      return true;
   } else if (!p || !q) {
      return false;
   } else {
      return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
   }

};
