function sumDigits(number) {
    if (number < 0) {
     let z = number.toString().slice(1);
     let f = z[0];
     let g = z[1];
     let q = +f;
     let w = +g;
        console.log(q+w);
     return q + w;
    } else {

        let a = number.toString();
        let b = a[0];
        let c = a[1];
        let d = +b;
        let e = +c;
        console.log(d+e)
        return d + e;
    }
    
    
}

sumDigits(-32);
