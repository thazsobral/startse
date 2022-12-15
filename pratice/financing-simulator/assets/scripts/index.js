"use strict";

import { FinancingWithGracePeriod } from "./financing-with-grace-period.js";
import { Financing } from "./financing.js";

const elementGrace = document.getElementById("grace");
const elementListGrace = document.getElementById("grace-list");
const elementTable = document.getElementById("table-body");
const elementButton = document.getElementById("btn-calculate");

function clearTable() {
    while(elementTable.firstChild) {
        elementTable.removeChild(elementTable.firstChild);
    }
}

elementGrace.addEventListener("change", function() {
    if(this.checked) {
        console.log("hello")
        elementListGrace.removeAttribute("hidden");
    } else {
        elementListGrace.setAttribute("hidden", true);
    }
});

elementButton.addEventListener("click", function(e) {
    clearTable();
    e.preventDefault();
    let value = parseFloat(document.getElementById("object-value").value);
    let entry = parseFloat(document.getElementById("entry-value").value);
    let interest = parseFloat(document.getElementById("interest-rate").value);
    let deadline = parseFloat(document.getElementById("deadline").value);
    let simulation;
    if(elementGrace.checked) {
        const grace = parseInt(elementListGrace.value);
        simulation = new FinancingWithGracePeriod(value, entry, interest, deadline, grace);
    } else {
        simulation = new Financing(value, entry, interest, deadline);
    }
    simulation.calculateMonthlyInstallments();
    simulation.showInstallments(elementTable);
})
