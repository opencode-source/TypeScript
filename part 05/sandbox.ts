let age: any;

age = 25;
console.log(age);

age = 'mahdi';
console.log(age);

age = true;
console.log(age);


let mixed: any[] = [];

mixed.push(25);
mixed.push('mahdi');
mixed.push(false);

console.log(mixed);



let person: {name: any, age: any};

person = {name: 'mahdi', age: 25};
console.log(person);

person = {name: 25, age: 'mahdi'};
console.log(person);