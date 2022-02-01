// classes
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('mahdi', 'work on the website', 250);
const invTwo = new Invoice('bahram', 'work on the bigger website', 400);
// console.log(invOne);
// console.log(invOne.format());
// console.log(invTwo);
// console.log(invTwo.format());
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
for (let inv of invoices) {
    console.log(inv.client);
    // console.log(inv.details);
    console.log(inv.amount);
}
console.log(invOne.format());
// const form = document.querySelector('form')!;
// console.log(form.children);
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();
//     console.log(
//         type.value,
//         tofrom.value,
//         details.value,
//         amount.valueAsNumber
//     );
// })
