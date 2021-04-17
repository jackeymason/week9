# src/puppy.js

class Puppy {
    constructor(name, breed, dob) {
        this.name = name;
        this.breed = breed;
        this.dob = dob;
    }

    speak() {
        console.log(`${name} says 'arf arf'`);
    }

    about() {
        console.log(`${name} is just a lil pup. He's a ${breed}`);
    }
}

module.exports = Puppy;