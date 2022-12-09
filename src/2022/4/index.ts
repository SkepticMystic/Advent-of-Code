const input = Deno.readTextFileSync("./src/2022/4/input.txt");
const pairs = input.split("\r\n");

type Section = ReturnType<typeof parseSectionAssingment>;
const parseSectionAssingment = (section: string) => {
    const [min, max] = section.split("-");
    return {
        min: parseInt(min),
        max: parseInt(max)
    };
}

const parsePair = (pair: string) => {
    const [a, b] = pair.split(",");
    return {
        a: parseSectionAssingment(a),
        b: parseSectionAssingment(b)
    };
}

const aOverlapsB = (a: Section, b: Section) => a.min <= b.max && b.min <= a.max;
const aContainsB = (a: Section, b: Section) => a.min <= b.min && b.max <= a.max;

export const D4 = {
    pairs,
    parsePair,
    aContainsB,
    aOverlapsB
}
