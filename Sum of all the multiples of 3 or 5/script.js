

const findSum = number => [...Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a,b) => a+b)