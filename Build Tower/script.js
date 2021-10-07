function towerBuilder(nFloors) {
<<<<<<< HEAD
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
        tower.push(" ".repeat(nFloors - i - 1) +
            "*".repeat((i * 2) + 1) +
            " ".repeat(nFloors - i - 1));
    }
    return tower;
}
=======
    let floor = '*';
    
    // определить количество этажей
    let numberOfFloors = nFloors;
    
    let tower = [];
    
    // 
        
    for (let i = 0; i < numberOfFloors; i++) {
        
    }

    // let a = floor.repeat(1);
    console.log(tower);
    
}


towerBuilder(2);
/* 
Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
*/
>>>>>>> 028f743a773c03be25fd1aee4bc723b4e72183b4
