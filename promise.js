//a promise in js is a object that represent the evential completion or failure of a an asynchronous operation and its resulting value
// resolve- called when the operation is succesfull
// reject - called when the operation is failed

//.then - execute is a promise is resolved
//.catch - execute is a promise is rejected
// .finally - finally executes regardless wheather the promise is resolved or rejected

//---creating a promise---

let MyPromise = new Promise((resolve, reject) => {

    let success = true;

    setTimeout(() => {
        if (success) {
            resolve("promise resolved successfully");
        }
        else {
            reject("promise is rejected")
        }
    }, 2000)
})

MyPromise
    .then(result => console.log(result))
    .catch(error=> console.log(error))
    .finally(()=> console.log("promise is executed"));

//creating promise object
