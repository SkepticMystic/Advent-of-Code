import { sum } from "../../utils/math.ts";
import { D3 } from "./index.ts";

const { findCommonItem, getItemPriority, rucksacks } = D3


const triplets = rucksacks.reduce((acc, r) => {
    acc.carr.push(r);
    if (acc.carr.length === 3) {
        acc.trips.push(acc.carr);
        acc.carr = [];
    }
    return acc;
}, { trips: [], carr: [] } as {
    trips: string[][],
    carr: string[]
}).trips

const priorities = triplets.map(trip => {
    const badge = findCommonItem(trip[0], trip[1], trip[2]);
    const priority = getItemPriority(badge!);
    return priority;
})

console.log(sum(priorities))