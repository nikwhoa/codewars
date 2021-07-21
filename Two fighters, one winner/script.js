class Fighter {
    constructor(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
    }
}

function declareWinner(fighter1, fighter2, firstAtacker) {
    let fighterOne = fighter1;
    let fighterTwo = fighter2;
    // let attacker;

    if (firstAtacker === fighterOne.name) {
        // attack
        // attacker = fighterOne; 
        attack(fighterOne, fighterTwo);
    } else {
        // attack
        attack(fighterTwo, fighterOne);
    }

    function attack(attackerOne, attackerTwo) {

        // let attackOne = true;
        // let attackTwo = false;

        // attackerTwo.health - attackerOne.damagePerAttack;

        //  

        let c = 1;
        let b = 2;
        let attackerOneHealth = attackerOne.health,
            attackerTwoHealth = attackerTwo.health,
            attackerOneDamage = attackerOne.damagePerAttack,
            attackerTwoDamage = attackerTwo.damagePerAttack;
        let winner;    

        while (c === 1 || c === 3 || c === 4 || c === 5 || c === 7 || c === 9 || c === 11 || c === 13 || c === 15 || c === 17 || c === 19) {
            attackerTwoHealth -= attackerOneDamage;
            if (attackerTwoHealth <= 0) {
                winner = attackerTwo.name;
                break;
            }
            while (b === 2 || b === 4 || b === 6 || b === 8 || b === 10 || b === 12 || b === 14 || b === 16 || b === 18 || b === 20 || b === 22) {
                if (attackerOneHealth <= 0) {
                    winner = attackerOne.name;
                    break;
                }
                attackerOneHealth -= attackerTwoDamage;
                b += 2;
            }
            c += 2;
        }
        
        

        console.log(attackerOneHealth);
        console.log(attackerTwoHealth);
        console.log(winner);

        // let c = 0;
        // let a;
        // let ah = attackerTwo.health;
        // while (ah > 0) {
        //     ah -= attackerOne.damagePerAttack;
        // }

        // console.log(ah);
        
        
        


        
        



        // console.log(attackerTwo.health - attackerOne.damagePerAttack);
        // console.log(attackerOne.health - attackerTwo.damagePerAttack);
    }

    // console.log(fighterOne);
    // console.log(fighterTwo);

}






declareWinner(new Fighter("Lew", 5, 10), new Fighter('Nikita', 100, 5), 'Nikita');
// function Fighter(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;





//     // console.log(name, health, damagePerAttack);

//     // this.toString = function() { return this.name; }
// }

// Fighter("Lew", 10, 2);
// declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew");