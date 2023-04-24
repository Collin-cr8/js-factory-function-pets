const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//Factory Function
const createPet = function(name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5, //1 = refreshed, 10 = exhausted
        //create method for sleep
        sleep: function() {
            console.log(`${name} needs a nap. Zzz...`);
            this.isTired = 1;
        },
        //create method for playtime
        play: function() {
            if (this.isTired === 10) {
                console.log("Too tired to play.");
                this.sleep();
            }
             else {
                console.log(`Yay! ${this.name} loves to play!`);
                this.isTired += 1;
            }
        }
    }
    return pet;
};

