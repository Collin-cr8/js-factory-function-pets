const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//Factory Function
const createPet = function(name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5, //1 = refreshed, 10 = exhausted
        sleep: function() {
            console.log(`${name} needs a nap. Zzz...`);
            this.isTired = 1;
        }
    }
};

