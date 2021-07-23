let gimme = (inputArray) => {
    // 2, 3, 1
    // arr[0] < arr[1] = true
    // arr[0] < [2] = false 
    let firstElement = inputArray[0];
    let secondElement = inputArray[1];
    let thirdElement = inputArray[2];
    let result;
    if (firstElement > secondElement) {
        console.log(secondElement);
    }

    if (firstElement > thirdElement) {
        console.log(thirdElement);
    }
    // if () {
        
    // }
    // console.log(result);
};


gimme([200, 330, 210]);
// gimme([1, 44, 32]);