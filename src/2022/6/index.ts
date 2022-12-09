const input = Deno.readTextFileSync('./src/2022/6/input.txt')

const hasDuplicates = (input: string[]) => new Set(input).size !== input.length

function findFirstNonRepeating(input: string, windowSize: number) {
    const buf: string[] = []
    for (let i = 0; i < input.length; i++) {
        const c = input[i]

        // Not enough chars yet
        if (buf.length < windowSize) {
            buf.push(c)
            continue
        }

        buf.shift(); buf.push(c)
        if (!hasDuplicates(buf)) return i + 1
    }
}


console.log(findFirstNonRepeating(input, 4))
console.log(findFirstNonRepeating(input, 14))

export const D6 = {} 