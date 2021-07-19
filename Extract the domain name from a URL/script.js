function domainName(url){
    let string = url.toLowerCase();
    let modifiedString;
    const regex = new RegExp('www*', 'http*', 'https*');
    // проверить первые 4 символа на совпадение по www.
    // проверить первые 7 символов на совпадение по http://
    // если false то проверить первые 8 символов на совпадение по https://
   
    // if (string.includes('www.') || string.includes('http://') || string.includes('https://')) {
    if (/^https|www|http|http/g.test(string)) {
        if (string[0] === 'w') {
            modifiedString = string.slice(4);
        } else if (string[4] === ':') {
            modifiedString = string.slice(7);
        }  else if (string[4] === 's') {
            modifiedString = string.slice(8);
        }
        
    } else {
        console.log(url);
    }


    let dot = modifiedString.indexOf('.');
    modifiedString = modifiedString.slice(0, dot);
    
    console.log(url);
    return modifiedString;

  }

  domainName('https://google.jp.com');