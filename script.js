class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Example usage:

const genericAnimal = new Animal("Unknown");
console.log(genericAnimal.species); // Output: Unknown
genericAnimal.makeSound(); // Output: Generic animal sound

const fluffy = new Cat("Cat");
console.log(fluffy.species); // Output: Cat
fluffy.makeSound(); // Output: Generic animal sound
fluffy.purr(); // Output: purr

const buddy = new Dog("Dog");
console.log(buddy.species); // Output: Dog
buddy.makeSound(); // Output: Generic animal sound
buddy.bark(); // Output: woof

window.Cat = Cat;
