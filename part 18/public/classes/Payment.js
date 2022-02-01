export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} - ${this.amount} تومان طلبکار برای ${this.details} `;
    }
}
