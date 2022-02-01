// Type Aliases
type s = string;
type n = number;
type sn = string|number;
type snb = string | number | boolean;

type arrayType = (string | number | boolean);

type objectType = {
    name: string,
    uid: string | number
};

// string - number - boolean

let fName : s;
let age : n;
let isMale : boolean;
let mixed1 : s | n;
let mixed2 : snb;

// let mixed3 : string | number | boolean;


//array

// let arr : arrayType[] = [];

// arr.push(12);
// arr.push('mahdi');
// arr.push(true);

// console.log(arr);

//object

// let user : objectType;

// user = {name: 'mahdi', uid: '24'};

// console.log(user);


//Function

// let sayHello = (name: s, age: n, phone: sn) => {
//     console.log(`hi my name is ${name} and im ${age} years old`);
// }

// sayHello('mahdi', 20, 123);
// sayHello('bahram', 32, '321');


let greet = (user: objectType) => {
    console.log(`${user.name} has a uid of ${user.uid}`);
}

greet({name: 'mahdi', uid: 123});
greet({name: 'bahram', uid: '123'});
