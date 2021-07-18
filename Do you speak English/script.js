const spEng = (sentence) => /.*english/i.test(sentence);

function spEng(sentence) {
    //write your code here
    if (/.*english/i.test(sentence)) {
        console.log(sentence);
       return true;
    } else {
        return false;
    }
}