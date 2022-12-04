"use strict";

import { Cupom } from "./cupom.js";

export class Client {
    #name;
    #expenses = 0;
    #discount;
    constructor(name) {
        this.#name = name;
        this.#discount = new Cupom();
    }

    get advantage() {
        return this.#discount.getDesc(this.#expenses);
    }
    
    set expenses(value) {
        this.#expenses += value;
    }
}