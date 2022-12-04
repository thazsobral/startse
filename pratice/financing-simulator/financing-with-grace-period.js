// "use strict";

import { Installment } from "./installment.js";
import { Financing } from "./financing.js";

export class FinancingWithGracePeriod extends Financing {
    #interest;
    #grace;
    #installments = [];
    constructor(value, entry, interest, deadline, grace) {
        super(value, entry, interest, deadline);
        this.#interest = interest;
        this.#grace = grace;
        this.#installments = super.installments;
    }

    calculateMonthlyInstallments() {
        let balance = this.#installments[0].balance;
        for(let i = 0; i < this.#grace; i++) {
            let number = this.#installments.length;
            balance += Installment.calculateInterest(balance, this.#interest);
            this.#installments.push(new Installment(number, 0, 0, 0, balance));
        }
        super.calculateMonthlyInstallments();
    }
}