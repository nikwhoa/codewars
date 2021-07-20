function domainName(url) {
    let string = url.toLowerCase();
    let modifiedString;

    // проверить первые 4 символа на совпадение по www.
    // проверить первые 7 символов на совпадение по http://
    // если false то проверить первые 8 символов на совпадение по https://

    // if (string.includes('www.') || string.includes('http://') || string.includes('https://') || string.includes('https://www')) {
    if (/^https|www|http|http/g.test(string)) {
        if (string[0] === 'w') {
            modifiedString = string.slice(4);
            console.log(1);
        } else if (string[10] === 'w') {
            modifiedString = string.slice(12);
            console.log(modifiedString);
        } else if (string[8] === 'w') {
            modifiedString = string.slice(11);
            console.log(modifiedString);
        } else if (string[4] === ':') {

            modifiedString = string.slice(7);

        } else if (string[4] === 's') {
            modifiedString = string.slice(8);
            console.log(3);
        }

    } else {
        modifiedString = url;
    }


    let dot = modifiedString.indexOf('.');
    modifiedString = modifiedString.slice(0, dot);

    console.log(url);
    console.log(modifiedString);
    return modifiedString;

}

domainName('https://www.xtzl-rozzp0xx4g5c.net/index.php');