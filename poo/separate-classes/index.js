"use strict";

import { Client } from "./client.js";

const c1 = new Client("Heitor");
c1.expenses = 1;
console.log(c1.advantage);
c1.expenses =  11;
console.log(c1.advantage);