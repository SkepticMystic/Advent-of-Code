export const sum = (numbers: number[]): number => numbers.reduce((a, b) => a + b, 0);

export const sumKey = <T extends Record<string, any>>(
    arr: T[], key: keyof T
): number => arr.reduce((acc, x) => acc + x[key], 0);

export const sumBy = <T>(arr: T[], selector: ((item: T) => number)): number =>
    arr.reduce((acc, x) => acc + selector(x), 0);

export const minBy = <T>(arr: T[], selector: ((item: T) => number)): number =>
    arr.reduce((acc, x) => Math.min(acc, selector(x)), Infinity);