import { sum } from "../../utils/math.ts";
import { D3 } from "./index.ts";

const { findCommonItem, getItemPriority, rucksacks, splitRucksack } = D3

const priorities = rucksacks.map(r => {
    const [a, b] = splitRucksack(r);

    const commonItem = findCommonItem(a, b);
    const priority = getItemPriority(commonItem!);
    return priority;
})

console.log(sum(priorities))