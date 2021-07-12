'use strict'

function duplicateCount(text){
    //...
    let duplicates = 0
    let number = 1;

    for (let i = 0; i < text.length; i++) {
        // debugger
        
        let letter = text[i]
        let textDuplicate = text[number]
        // console.log(letter);
        // console.log(text[i++]);
        if (letter === textDuplicate) {
            duplicates++
            // debugger
            // console.log(textDuplicate);
        } else {
            console.log('no duplicates');
        }
        ++number
        
    }
    console.log(duplicates);
  }

duplicateCount('nikita')  