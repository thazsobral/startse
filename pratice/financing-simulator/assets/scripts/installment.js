export class Installment {
    #number;
    #value;
    #interest;
    #amortization;
    #balance;
    constructor(number, value, interest, amortization, balance) {
        this.#number = number;
        this.#value = value;
        this.#interest = interest;
        this.#amortization = amortization;
        this.#balance = balance;
    }

    static calculateInterest(value, interest) {
        return value * (interest / 100);
    }

    get balance() {
        return this.#balance;
    }

    getInstallment() {
        let data = [];
        data.push(this.#number);
        data.push(this.#value.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}));
        data.push(this.#amortization.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}));
        data.push(this.#interest.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}));
        data.push(this.#balance.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}));
        return data;
    }
}