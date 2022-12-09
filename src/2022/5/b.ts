import { last } from "../../utils/index.ts";
import { D5 } from "./index.ts";

const { crates, multiOrders, moveMulti } = D5;

for (const order of multiOrders) moveMulti(order, crates);

console.log(crates.map(last).join(''));