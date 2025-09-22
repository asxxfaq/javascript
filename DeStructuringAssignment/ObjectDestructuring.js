const person = { name: 'lisan', age: 22, country: 'india' };

//basic destructuring

const { name, age,} = person;
console.log(name);
console.log(age);

//rename variables

const {country:nation} = person ;
console.log(nation);

// default values 

const { gender = 'male'}= person;
console.log(gender);



