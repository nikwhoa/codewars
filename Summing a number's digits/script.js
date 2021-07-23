function sumDigits(number) {
    
    let n = number.toString();
    let arrayOfNumbers = [];
    let result = 0;
    for (let i = 0; i < n.length; i++) {
        arrayOfNumbers[i] = n[i];   
    }

    if (arrayOfNumbers[0] === '-') {
        arrayOfNumbers.shift();
    }

    let a = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        a[i] = parseInt(arrayOfNumbers[i]);
    }

    a.forEach(el => {console.log(result); return result += el;});
    
    return result;
    
}

sumDigits(-327);
