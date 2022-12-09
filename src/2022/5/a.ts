import { last } from "../../utils/index.ts";
import { D5 } from "./index.ts";

const { crates, move, orders } = D5;

for (const order of orders) move(order, crates);

console.log(crates.map(last).join(''));