import { D4 } from "./index.ts";

const { aContainsB, pairs, parsePair } = D4

const contains = pairs.map(p => {
    const { a, b } = parsePair(p);
    return aContainsB(a, b) || aContainsB(b, a);
})

console.log(contains.filter(c => c).length);