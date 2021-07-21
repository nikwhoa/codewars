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

    if (firstAtacker === fighterOne.name) {
       
        attack(fighterOne, fighterTwo);
    } else {
        
        attack(fighterTwo, fighterOne);
    }

    function attack(attackerOne, attackerTwo) {
        
        let attackerOneHealth = attackerOne.health,
            attackerTwoHealth = attackerTwo.health,
            attackerOneDamage = attackerOne.damagePerAttack,
            attackerTwoDamage = attackerTwo.damagePerAttack;

    }

}

declareWinner(new Fighter("Lew", 5, 10), new Fighter('Nikita', 100, 5), 'Nikita');
