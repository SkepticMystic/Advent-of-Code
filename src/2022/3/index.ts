const input = Deno.readTextFileSync("./src/2022/3/input.txt");

const splitRucksack = (rucksack: string) => {
    const firstHalf = rucksack.slice(0, rucksack.length / 2);
    const secondHalf = rucksack.slice(rucksack.length / 2);

    return [firstHalf, secondHalf];
}

const findCommonItem = (...arrs: string[]) => {
    for (const x of arrs[0]) {
        if (arrs.every(a => a.includes(x))) return x;
    }
}

const getItemPriority = (item: string) => {
    const isLowercase = item === item.toLowerCase();
    return isLowercase
        ? item.charCodeAt(0) - 96
        : item.charCodeAt(0) - 64 + 26;
};

export const D3 = {
    rucksacks: input.split("\r\n"),
    splitRucksack,
    findCommonItem,
    getItemPriority
}