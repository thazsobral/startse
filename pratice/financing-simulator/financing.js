// "use strict";

import { Installment } from "./installment.js";

export class Financing {
    #interest;
    #deadline;
    #installments = [];
    constructor(value, entry, interest, deadline) {
        this.#interest = interest;
        this.#deadline = deadline;
        this.#installments.push(new Installment(0, 0, 0, 0, value - entry));
    }

    calculateMonthlyInstallments() {
        let balance = this.#installments[this.#installments.length-1].balance;
        let deadline = this.#deadline - (this.#installments.length-1);
        let amortization = balance / deadline;

        for(let i = 0; i < deadline; i++) {
            let number = this.#installments.length;
            let interest = Installment.calculateInterest(balance, this.#interest);
            let value = interest + amortization;
            balance -= amortization;
            
            if(balance < 0) {balance = 0};
            
            this.#installments.push(new Installment(number, value, interest, amortization, balance));
        }
    }

    showInstallments(elementTable) {
        let installments = this.#installments.slice(1);
        console.log(installments);
        for(let installment of installments) {
            console.log(installment);
            let line = elementTable.insertRow(-1);
            for(let data of installment.getInstallment()) {
                let cell = line.insertCell(-1);
                cell.textContent = data;
            }
        }
    }

    get installments() {
        return this.#installments;
    }
}