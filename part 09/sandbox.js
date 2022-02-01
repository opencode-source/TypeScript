// let greet = Function;
//Example 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// greet = (name: string, greeting: boolean) => {
//     console.log(`${name} says ${greeting}`);
// }
// greet('mahdi', 'hello');
//Example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//Example 3
var person;
person = function (mahdi) {
    console.log("my name is " + mahdi.name + " and im " + mahdi.age + " years old");
};
person({ name: 'bahram', age: 25 });
