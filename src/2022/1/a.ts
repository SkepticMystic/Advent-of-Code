import { sum } from "../../utils/math.ts";

const input = Deno.readTextFileSync("./src/2022/1/input.txt");

const numbers = input.split("\n").map((n) => parseInt(n));

const calaryTotals: number[] = [];
let currTotal = 0
for (const n of numbers) {
    if (Number.isNaN(n)) {
        calaryTotals.push(currTotal);
        currTotal = 0;
    }
    else currTotal += n;
}


console.log('a', Math.max(...calaryTotals));

console.log('b', sum(calaryTotals.sort((a, b) => b - a).slice(0, 3)));