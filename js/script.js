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

//Create 5 new objects
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);
clover.sleep(); //changes isTired value to 1
baxter.play(); //changes is tired value from 5 to 6

//console.log(clover, baxter);