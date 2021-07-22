const binaryArrayToNumber = arr => {
    // your code
    let a = [];
    arr.forEach(element => {
        a += element.toString();
    });
    
    return parseInt(a, 2);
  };


  binaryArrayToNumber([1,1,1,1]);

  /* BEST SOLUTION  ================================================================================== */

  const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2);
  };