const students = [
    { name: 'ali', age: 22, grade: 'A' },
    { name: 'vishnu', age: 22, grade: 'C' },
    { name: 'jithu', age: 22, grade: 'B' }
]

//accessing datas

console.log(students[0].name,students[0].age);
console.log(students[1].grade);

//looping through object array

students.forEach(stdnts => {
    console.log(`${stdnts.name} is ${stdnts.age} years old`);
    
})


