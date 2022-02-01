// let greet = Function;

//Example 1
let greet : (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

// greet = (name: string, greeting: boolean) => {
//     console.log(`${name} says ${greeting}`);
// }

// greet('mahdi', 'hello');


//Example 2
let calc : (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add'){
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
}

// console.log(calc(5,3,'mahdi'));

type objectType = {name: string, age: number};

//Example 3
let person : (obj: objectType) => void;

person = (mahdi : objectType) => {
    console.log(`my name is ${mahdi.name} and im ${mahdi.age} years old`);
}

person({name: 'bahram', age: 25});

