// one class that inherits properties and methods from another class (by using 'extends' keyword)
// base class
class Animal {
    constructor(name) {
        this.name = name;//initialisation
    }
    speak() {
        console.log(`${this.name} makes sound`);
    }

}
// derived class inherits from animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name);//calls the parent constructor
        this.breed = breed;

    }
    // override speak method(polymorphism)
    speak() {
        console.log(`${this.name} - ${this.breed} barks`);

    }
}
const dog = new Dog("Rex","German Shepherd");
dog.speak();