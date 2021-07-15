function countSmileys(arr) {
  /* 
     1. если у элемента массива три знака то поместить этот элемент в отдельный массив NOSE
     2. удалить из начального массива элементы с носом
     3. у всех элементов "без носа" сделать проверку на глаза.
       3.1 проверить первый символ элемента на соответствие с глазами : or ;
       3.2 если первый символ элемента содержит недопустимый знак то удалить его
     4. у всех элементов "без носа" сделать проверку на рот 
       4.1 проверить первый символ элемента на соответствие с глазами ) or D
       4.2 если первый символ элемента содержит недопустимый знак то удалить его
  */
  let nose = [];
  let noNose = [];
  /* 1 ================================================================================== */


  arr.forEach((element, i) => {
    if (element.length > 2) {
      nose[i] = element;
      nose = nose.filter((entry) => {
        return entry.trim() != ''
      }); // удаляем все элементы без носа
    }
  });


  /* 2 ================================================================================== */

  arr.forEach((element, i) => {
    if (element.length === 2) {
      noNose[i] = element;
    }
  });

  /* 3 ================================================================================== */


  noNose.filter(el => {
    if (el[0] === ':' || el[0] === ';') {
      return noNose;
    } else {
      let i = noNose.indexOf(el);
      noNose.splice(i, 1);
    }
  });
  
  // console.log(noNose);
 
  /* 4 ================================================================================== */
  noNose.filter(el => {
    if (el[1] === ')' || el[1] === 'D') {
      console.log(el);
      noNose = el;
    } else {
    
      // let i = noNose.indexOf(el);
    
      // noNose.splice(i, 1);
      
    }
  });

  /* 5 ================================================================================== */
  nose.filter(el => {
    if (el[0] === ':' || el[0] === ';') {
      nose = el;
    } else {
      // console.log(1);
      // let i = nose.indexOf(el);
      // nose.splice(i, 1);
    }

    if (el[2] === ')' || el[2] === 'D') {
      nose = el;
    } else {
      // console.log(2);
      // let i = nose.indexOf(el);
      // nose.splice(i, 1);
    }

    if (el[1] === '-' || el[1] === '~') {
      nose = el;
    } else {
      // let i = nose.indexOf(el);
      // nose.splice(i, 1);
    }
  })

  console.log(noNose);
  console.log(nose);

  let res = [nose].length + [noNose].length;
  console.log(res);

  return res;

 
}


countSmileys([':D',':~)',';~D',':)']);