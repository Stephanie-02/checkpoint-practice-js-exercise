const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
];

class Person {
    constructor (name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        this._age = newAge;
    }
}

class Student extends Person {
    constructor (name, age, academy) {
        super(name, age);
        this._academy = academy;
    }

    get academy() {
        return this._academy;
    }

    set academy(newAcademy) {
        this._academy = newAcademy;
    }

    signup(callback1) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (callback1 === undefined) {
                    reject ("We did not receive any callback function")
                } else {
                    let academyName = callback1();
                    resolve (`Congrats, you joined ${academyName}!`);
                }
            }, 2000);
        })
    }
} 

function callbackFc() {
    return "Develhope";
}

const student = new Student("Stephanie", 21, "Develhope");

student.signup().then((message) => {
    console.log(message);
}).catch((error) => {
    console.log("we had an error");
    console.log(error);
})

let students = [];

for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    let newStudent = new Student(person.name, person.age, callbackFc());
    students.push(newStudent);
}

console.log(students);

class DataProcess {
    static studentInfo(students) {
        return students.map((student) => {
            return `${student.name}, aged ${student.age}, is a student of ${student.academy}`
        })
    }

    static getAdults(students) {
        return students.filter((student) => student.age > 18);
    }

    static getAverageAge(students) {
        let result = students.reduce((total, previousStudent) => total + previousStudent.age, 0);
        return result / students.length;
    }
}

let result = DataProcess.studentInfo(students);
console.log(students);
let resultAdults = DataProcess.getAdults(students);
console.log(students);
let resultAverage = DataProcess.getAverageAge(students);
console.log(students);

let jsonStr = JSON.stringify(students);
console.log(jsonStr);

let parsed = JSON.parse(jsonStr);
console.log(parsed);