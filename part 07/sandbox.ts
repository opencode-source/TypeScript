let greet: Function;

greet = () => {
    console.log('Hello, World');
}

let sayHello = (fName: string) => {
    console.log('Hello', fName);
}

let add = (a: number, b: number) => {
    return a+b;
}

// let result = add(12, 2);
// console.log(result);

// console.log(add(5, 7));

let sub = (a: number, b: number, c: number | string = 0) : number => {
    console.log(c);
    return a-b;
}

sub(2, 1, 7);

// let result: string;
// result = sub(5,2);