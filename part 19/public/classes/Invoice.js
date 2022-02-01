export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} - ${this.amount} تومان بدهکار برای ${this.details} `;
    }
}
