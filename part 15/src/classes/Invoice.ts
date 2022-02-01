import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
    constructor(
        public client: string,
        private details: string,
        readonly amount: number
    ){}

    format(){
        return `${this.client} - ${this.amount} تومان بدهکار برای ${this.details} `
    }
}