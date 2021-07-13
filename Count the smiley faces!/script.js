
function countSmileys(arr) {
  let smile = 0;
    arr.forEach(element => {
        if (element === ':)' || element === ':D' || element === ';-D' || element === ':~)') {
            smile++;
            return smile;
        } else {
          console.log('not face');
        }
    });
    console.log(smile);
}

countSmileys([':D',':~)',';~D',':)']);


