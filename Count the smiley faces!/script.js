function countSmileys(arr) {
  let smile = 0;
  let eyes = [':', ';'];
  let nose = ['-', '~'];
  let mouth = [')', 'D'];
  let newArr = [];
  let array = [];

  arr.forEach((element, i) => {
    if (element[0][0] === eyes[0] || element[0][0] === eyes[1]) {
      array[i] = element;
      newArr = array.filter(function (el) {
        return el !== null;
      });
      return newArr;
    }
  });



  newArr.forEach(el => {
    if (el.length > 2) {
      if (el[1] === nose[0] || el[1] === nose[1]) {
        return newArr;
      } else {
        newArr.splice(newArr.indexOf(el), 1);
        return newArr;
      }
    }
  });



  newArr.forEach(el => {
    if (el[1] === mouth[0] || el[1] === mouth[1]) {
      return newArr;
    } 
    // else {
    //   newArr.splice(newArr.indexOf(el), 1);
    //   return newArr;
    // }
  });




  let sum = newArr.length;
  console.log(newArr);
  // console.log(sum);
  return sum;


}


countSmileys([':)', ':(', ':D', ':O', ':;']);