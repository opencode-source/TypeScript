// classes

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('mahdi', 'work on the website', 250);
const invTwo = new Invoice('bahram', 'work on the bigger website', 400);

// console.log(invOne);
// console.log(invOne.format());
// console.log(invTwo);
// console.log(invTwo.format());

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

// console.log(invoices);

invOne.client = 'nader';

console.log(invOne);


// const form = document.querySelector('form')!;

// console.log(form.children);

const form = document.querySelector('.new-item-form') as HTMLFormElement;


//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();

//     console.log(
//         type.value,
//         tofrom.value,
//         details.value,
//         amount.valueAsNumber
//     );
// })

