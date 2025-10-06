class Car {
    constructor(name) {
        this.name = name;//initialisation
    }
    speak() {
        console.log(`${this.name} Races`);
    }

}
class Model extends Car {
    constructor(name,model) {
        super(name);
        this.model = model;

    }
   
    speak() {
        console.log(`${this.name} - ${this.model} Is Very Beautiful`);

    }
}
const MyCar = new Model("Lambhorghini","Revuelto");
MyCar.speak();