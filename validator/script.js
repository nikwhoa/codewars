
function validatePIN (pin) {
    //return true or false
    
    let a = pin.toString();
    if (a.length < 4 || a.length == 5 || a.length > 6) {
        return false;
    } else if (/^(\d+|Infinity)$/.test(a)) {               
        return true;
    } else if (a < 0 ) {
        return false;
    }
    else {
        return false;
    }
  }  

validatePIN('+123');

// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
//   }