const input = Deno.readTextFileSync("./src/2022/2/input.txt");

export const D2 = {
    rounds: input.split("\r\n").map(r => r.split(" ") as [string, string]),
    OUTCOMES: {
        WIN: 6,
        DRAW: 3,
        LOSS: 0,
    },
    MOVE_POINTS: {
        X: 1,
        Y: 2,
        Z: 3,
    }
}
