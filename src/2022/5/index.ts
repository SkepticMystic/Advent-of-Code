const input = Deno.readTextFileSync('./src/2022/5/input.txt')

const lines = input.split('\r\n')
const splitI = lines.findIndex(l => l === '')

const [crateLines, orderLines] = [lines.slice(0, splitI - 1), lines.slice(splitI + 1)]

const crates: string[][] = []


const reversed = crateLines.reverse()

for (const row of reversed) {
    for (let i = 0; i < row.length + 1; i++) {
        const item = row[i + 1]
        if (!item?.match(/\w/)) continue

        const crate = ((i) % (row.length + 1)) / 4
        console.log({ i, crate, item })

        crates[crate] = crates[crate] || []
        crates[crate].push(item)
    }
}

console.log(crates)


export const D5 = {
    input
}