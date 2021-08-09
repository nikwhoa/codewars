let number = (array) => {
    let counter = 0;
    let o = [];
    for (let i = 0; i < array.length; i++) {
        counter++;
        o[i] = counter + ': ' + array[i];
        // return counter + ': ' + array[i];
    }
    return o;
};

let number = (a) => a.map((v, i) => `${i + 1}: ${v}`);