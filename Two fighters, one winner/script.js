class Fighter {
    constructor(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
    }
    
    log() {
        
        console.log(this.health);
        console.log(this.damagePerAttack);
    }
}




new Fighter("Lew", 10, 2).log()

// declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");