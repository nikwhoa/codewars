let b = [];
    let c = [];
    let d = [];
    let e = [];

function sumTwoSmallestNumbers(array) {

    
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i + 1]) {
            b[i] = array[i];
        }
    }
    c = b.filter(el => el != null).sort((a, b) => a - b);
    d = c[0] + c[1];
    
    if (c.length > 2) {
        for (let i = 0; i < c.length; i++) {
            if (c[i] < c[i + 1]) {
                e[i] = c[i];
            }
        }
        d = e[0] + e[1];
        console.log(d);
    }
    console.log(d);
}

sumTwoSmallestNumbers(52,76,14,12,4);