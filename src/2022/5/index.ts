const input = Deno.readTextFileSync('./src/2022/5/input.txt')

const lines = input.split('\r\n')
const splitI = lines.findIndex(l => l === '')

const [crateLines, orderLines] = [lines.slice(0, splitI - 1), lines.slice(splitI + 1)]

const reversed = crateLines.reverse()
const crates: string[][] = []
for (const row of reversed) {
    for (let i = 0; i < row.length + 1; i++) {
        const item = row[i + 1]
        if (!item?.match(/\w/)) continue

        const crate = i / 4
        crates[crate] = crates[crate] || []
        crates[crate].push(item)
    }
}

type Order = { from: number, to: number }
const orders: Order[] = []
const orderRegex = /move (\d+) from (\d+) to (\d+)/

for (const line of orderLines) {
    const [count, from, to] = [...line.match(orderRegex)!].slice(1).map(x => parseInt(x))

    for (let i = 0; i < count; i++) orders.push({ from, to })
}

function move({ from, to }: Order, crates: string[][]) {
    const item = crates[from - 1].pop()
    crates[to - 1].push(item!)
}

type MultiOrder = Order & { count: number };
const multiOrders: MultiOrder[] = []

for (const line of orderLines) {
    const [count, from, to] = [...line.match(orderRegex)!].slice(1).map(x => parseInt(x))

    multiOrders.push({ from, to, count })
}

function moveMulti({ from, to, count }: MultiOrder, crates: string[][]) {
    const items = crates[from - 1].splice(-count)
    crates[to - 1].push(...items)
}

export const D5 = {
    input,
    crates,
    orders,
    multiOrders,
    move,
    moveMulti,
}