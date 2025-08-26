const person={
    name:'akash',
    age:22,
    isStudent: false
}
console.log(person.name)
console.log(person.age);

//add or modify data

person.city="new york";//add

person.age=31;//modify
console.log(person);

delete person.city;//deleted city from person

console.log('final deatails of the person is ', person);

