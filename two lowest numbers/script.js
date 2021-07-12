/* 

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

// 

let a = [5,3,1,20,10];
// let f = [1,2];
let b = [];

function sum(arrays) {
    let counter = 0;
    
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[counter] < arrays[i]) {
            // let w = arrays[i];
            // console.log(w);
            counter++;
            arrays = arrays.splice(0, i);
        } else {
            console.log('sss-');
        }
    }
    
    console.log(arrays);
    

    // сравнить первый элемент массива со всеми остальными элементами массива
    // если есть элемент больше то удалить его
    // если нет елемента больше то оставить этот элемент
    // сравнить второй элемент массива со всеми элементами массива начиная с первого
    // если есть элемент больше то удалить его
    // сравнить третий элемент массива со всеми элементами массива начиная с первого
    // если есть элемент больше то удалить его
    // и т.д.
    // удалять элементы пока длина массива не будет равна двум (пока не останется два элемента
}

sum(a);
// console.log(b);