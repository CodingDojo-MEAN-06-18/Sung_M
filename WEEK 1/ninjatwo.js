function Ninja (name) {
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;

    this.sayName = function() {
        console.log("My ninja name is " + this.name + "!");
        return this;
    }

    this.showStats = function() {
        console.log("Name: " + this.name + ", " +  "Health: " + this.health + ", " + "Speed: " + speed + ", " + "Strength: " + strength);
        return this;
    }

    this.drinkSake = function() {
        this.health += 10;
        return this;
    }

    this.punch = function(enemyNinja) {
        if (enemyNinja instanceof Ninja) {
            enemyNinja.health -= 5;
            console.log(enemyNinja.name + " was punched by " + this.name + " and lost 5 Health!");
            return this;
        }
        else {
            console.log("Punches are for Ninjas!");
        }
    }

    this.kick = function(enemyNinja) {
        if (enemyNinja instanceof Ninja) {
            enemyNinja.health -= strength * 15;
            console.log(enemyNinja.name + " was kicked by " + this.name + " and lost 15 Health!");
            return this;
        }
        else {
            console.log("Kicks are for Ninjas!");
        }
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// redNinja.kick(blueNinja);
redNinja.showStats();
blueNinja.showStats();
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
