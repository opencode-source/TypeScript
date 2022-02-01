"use strict";
var anchor = document.querySelector('a');
// // if(anchor){
// //     console.log(anchor.href)
// // }
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// console.log(form.children);
var form = document.querySelector('.new-item-form');
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
