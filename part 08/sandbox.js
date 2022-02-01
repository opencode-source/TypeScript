// string - number - boolean
var fName;
var age;
var isMale;
var mixed1;
var mixed2;
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
var greet = function (user) {
    console.log(user.name + " has a uid of " + user.uid);
};
greet({ name: 'mahdi', uid: 123 });
greet({ name: 'bahram', uid: '123' });
