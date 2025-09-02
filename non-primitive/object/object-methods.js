//you can store function inside objects are called methods

//".this "- keyword = it refers the object itself.(used to access properties and methods)
const car = {
    brand: "toyota",
    start: function () {
        console.log(`${this.brand} is started`);
        // console.log('car started');


    }
}
car.start();