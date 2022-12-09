import { D4 } from "./index.ts";

const { aOverlapsB, pairs, parsePair } = D4

const overlaps = pairs.map(p => {
    const { a, b } = parsePair(p);
    return aOverlapsB(a, b)
})

console.log(overlaps.filter(c => c).length);