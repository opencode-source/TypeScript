import {Invoice} from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import {Payment} from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === 'صورتحساب'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
})


// Enums

enum ResourceType {AUTHO, PERSON, FILM, BOOK};

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: {name: 'mahdi'}
}

const docTwo: Resource<object> = {
    uid: 2,
    resourceType: ResourceType.BOOK,
    data: {title: 'Sag Velgard'}
}

console.log(docOne, docTwo);