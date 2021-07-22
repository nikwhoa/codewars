function declareWinner(fighter1, fighter2, firstAtacker) {
    class Fighter {
        constructor(name, health, damagePerAttack) {
            this.name = name;
            this.health = health;
            this.damagePerAttack = damagePerAttack;
        }
    }
    let fighterOne = fighter1;
    let fighterTwo = fighter2;
    let winner;

    if (firstAtacker === fighterOne.name) {
        attack(fighterOne, fighterTwo);
    } else {
        attack(fighterTwo, fighterOne);
    }

    function attack(attackerOne, attackerTwo) {

        let attackerOneHealth = attackerOne.health,
            attackerTwoHealth = attackerTwo.health,
            attackerOneDamage = attackerOne.damagePerAttack,
            attackerTwoDamage = attackerTwo.damagePerAttack,
            counter = 0;


        while (attackerOneHealth > 0 || attackerTwoHealth > 0) {
            if (counter) {
                attackerOneHealth -= attackerTwoDamage;
                console.log(attackerTwo.name + ' has ' + attackerTwoHealth);
                counter--;
            } else {
                attackerTwoHealth -= attackerOneDamage;
                console.log(attackerOne.name + ' has ' + attackerOneHealth);
                counter++;
            }

            if (attackerOneHealth <= 0 || attackerTwoHealth <= 0) {
                break;
            }
        }
        if (attackerTwoHealth > 0) {
            console.log('The winner is ' + attackerTwo.name);
            winner = attackerTwo.name;
        }
        if (attackerOneHealth > 0) {
            console.log('The winner is ' + attackerOne.name);
            winner = attackerOne.name;
        }
    }
    return winner;
}


declareWinner(new Fighter("Yarik", 20000, 500), new Fighter('Serega', 10, 1), 'Yarik');