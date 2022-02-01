var greet;
greet = function () {
    console.log('Hello, World');
};
var sayHello = function (fName) {
    console.log('Hello', fName);
};
var add = function (a, b) {
    return a + b;
};
// let result = add(12, 2);
// console.log(result);
// console.log(add(5, 7));
var sub = function (a, b, c) {
    if (c === void 0) { c = 0; }
    console.log(c);
    return a - b;
};
sub(2, 1, 7);
// let result: string;
// result = sub(5,2);
