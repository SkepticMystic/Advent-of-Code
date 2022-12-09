import { sum } from "../../utils/math.ts"

const input = Deno.readTextFileSync('./src/2022/7/input.txt')

type RootDirectory = {
    [path: string]: {
        [name: string]: number
    }
}

const buildRootFromHistory = (history: string[]): RootDirectory => {
    const root: RootDirectory = {}
    let cwd = ''

    for (const out of history) {
        const slash = cwd === '/' ? '' : '/'

        const cd = /\$ cd (.+)/.exec(out)
        if (cd) {
            const nwd = cd[1]

            if (nwd === '/') cwd = nwd
            else if (nwd === '..') cwd = cwd.split('/').slice(0, -1).join('/')
            else cwd += `${slash}${nwd}`

            continue
        }

        const dir = /^dir (.+)$/.exec(out)
        if (dir) {
            const [, name] = dir
            const path = `${cwd}${slash}${name}`

            if (!root[path]) root[path] = {}
            continue
        }


        const file = /(\d+) (.+)/.exec(out)
        if (file) {
            const [, size, name] = file

            if (!root[cwd]) root[cwd] = {}
            root[cwd][name] = Number(size)

            continue
        }
    }

    return root
}

const root = buildRootFromHistory(input.split('\r\n'))
const paths = Object.keys(root)

function getDirectorySize(root: RootDirectory, path: string): number {
    const matchingPaths = paths.filter(p => p.startsWith(path))

    let size = 0
    for (const p of matchingPaths) size += sum(Object.values(root[p]))

    return size
}

const sizes: Record<string, number> = {}
for (const path of paths) {
    sizes[path] = getDirectorySize(root, path)
}

console.log(sum(Object.values(sizes).filter(s => s <= 100_000))) // a

const TOTAL_SIZE = 70_000_000
const used = sizes['/']
const unused = TOTAL_SIZE - used
const TARGET_UNUSED_SIZE = 30_000_000
const sizeNeeded = TARGET_UNUSED_SIZE - unused

const firstDirToDelete = Object.values(sizes)
    .sort((a, b) => a - b)
    .find(s => s >= sizeNeeded)

console.log(firstDirToDelete) // b