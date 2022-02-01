"use strict";
// classes
var Invoice = /** @class */ (function () {
    // public client: string;
    // private details: string;
    // readonly amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mahdi', 'work on the website', 250);
var invTwo = new Invoice('bahram', 'work on the bigger website', 400);
// console.log(invOne);
// console.log(invOne.format());
// console.log(invTwo);
// console.log(invTwo.format());
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
for (var _i = 0, invoices_1 = invoices; _i < invoices_1.length; _i++) {
    var inv = invoices_1[_i];
    console.log(inv.client);
    // console.log(inv.details);
    console.log(inv.amount);
}
console.log(invOne.format());
// const form = document.querySelector('form')!;
// console.log(form.children);
var form = document.querySelector('.new-item-form');
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();
//     console.log(
//         type.value,
//         tofrom.value,
//         details.value,
//         amount.valueAsNumber
//     );
// })
