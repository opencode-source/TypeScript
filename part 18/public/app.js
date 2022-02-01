import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'صورتحساب') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["AUTHO"] = 0] = "AUTHO";
    ResourceType[ResourceType["PERSON"] = 1] = "PERSON";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["BOOK"] = 3] = "BOOK";
})(ResourceType || (ResourceType = {}));
;
const docOne = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: { name: 'mahdi' }
};
const docTwo = {
    uid: 2,
    resourceType: ResourceType.BOOK,
    data: { title: 'Sag Velgard' }
};
console.log(docOne, docTwo);
