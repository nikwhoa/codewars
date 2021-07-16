function countSmileys(arr) {
  // проверить у какого элемента массива три символа, 
  // если он есть, то провести проверку на глаза
  // если первый символ соотвествует глазам то оставить этот элемент в массиве
  // если не соотвествует то удалить его с массива
  // провести проверку на нос
  
  let noses = [];
  

  
  let eyes = [':', ';'];
  let nose = ['-', '~'];
  let mouth = [')', 'D'];

  // проверить у какого элемента массива три символа, 
  arr.filter((el,i) => {
    if (el.length > 2) {
      noses[i] = el;
      noses = noses.filter((entry) => {
        return entry.trim() !== '';
      }); // удаляем пустые элементы
    }
  });
  

  // если он есть, то провести проверку на глаза
  // если первый символ соотвествует глазам то поместить правильный элемент в новый массив
  let correctNoses = [];
  noses.filter((el,i) => {
    if (el[0] === eyes[0] || el[0] === eyes[1]) {
      correctNoses[i] = el;
      correctNoses = correctNoses.filter((entry) => {
        return entry.trim() !== '';
      });
    }
  });

  let correctNosesNose = [];
  // провести проверку на нос
  correctNoses.filter((el, i) => {
    if (el[1] === nose[0] || el[1] === nose[1]) {
      correctNosesNose[i] = el;
      correctNosesNose = correctNosesNose.filter((entry) => {
        return entry.trim() !== '';
      });
    }
  });

  // провести проверку на рот

  let correctNosesNoseMouth = [];
  
  correctNosesNose.filter((el, i) => {
    if (el[2] === mouth[0] || el[2] === mouth[1]) {
      correctNosesNoseMouth[i] = el;
      correctNosesNoseMouth = correctNosesNoseMouth.filter((entry) => {
        return entry.trim() !== '';
      });
    }
  });

  /* correctNosesNoseMouth элементы с носом - все! ================================================================================== */
  // console.log(correctNosesNoseMouth);
 
  let eyesArray = [];
  
  arr.filter((el,i) => {
    if (el.length === 2) {
      eyesArray[i] = el;
      eyesArray = eyesArray.filter((entry) => {
        return entry.trim() !== '';
      }); // удаляем пустые элементы
    }
  });

  let eyesArrayCorrect = [];

  eyesArray.filter((el, i) => {
    if (el[0] === eyes[0] || el[0] === eyes[1]) {
      eyesArrayCorrect[i] = el;
      eyesArrayCorrect = eyesArrayCorrect.filter((entry) => {
        return entry.trim() !== '';
      }); // удаляем пустые элементы
    }
  })

let mouthArray = [];

eyesArrayCorrect.filter((el, i) => {
  if (el[1] === mouth[0] || el[1] === mouth[1]) {
    mouthArray[i] = el;
    mouthArray = mouthArray.filter((entry) => {
      return entry.trim() !== '';
    }); // удаляем пустые элементы
  }
})

let sum = mouthArray.length + correctNosesNoseMouth.length;

console.log(sum);
  
return sum;

}


countSmileys([';]', ':[', ';*', ':$', ';-D']);