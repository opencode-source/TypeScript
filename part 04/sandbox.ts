// explicit types
let fName: string;
let age: number;
let isMale: boolean;

// age = 'mahdi';
age = 20;

// array
let numbers: number[] = [];
// numbers[0] = 20;
// numbers[1] = 'mahdi';
numbers.push(2);

// union types
let mixed: (number|string|boolean)[] = [];

mixed.push(2);
mixed.push('mahdi');
mixed.push(true);

let uid: string|number;

uid = '123';
uid = 123;
// uid = false;


// objects
let personOne: object;

personOne = {name: 'mahdi', age: 25};
personOne = [];

let personTwo: {
    name: string,
    age: number,
    isMale: boolean
}

// personTwo = {
//     name: 'mahdi',
//     age: 25,
//     isMale: true,
//     phone: 123
// }

