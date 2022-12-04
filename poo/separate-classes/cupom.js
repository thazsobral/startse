"use strict";

export class Cupom {
    static discountA = 10;
    static discountB = 30;
    getDesc(expenses) {
        return expenses > 10 ? Cupom.discountB : Cupom.discountA;
    }
}