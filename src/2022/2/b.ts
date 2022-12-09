import { D2 } from "./index.ts";

const { MOVE_POINTS, OUTCOMES, rounds } = D2

const RESULT_MAP = {
    X: 'LOSS',
    Y: 'DRAW',
    Z: 'WIN',
} as const

const playRound = (round: typeof rounds[number]): number => {
    const [o, r] = round;
    const result = RESULT_MAP[r as keyof typeof RESULT_MAP];
    const points = OUTCOMES[result];

    switch (r) {
        case 'X': {
            switch (o) {
                case 'A': return points + MOVE_POINTS.Z;
                case 'B': return points + MOVE_POINTS.X;
                case 'C': return points + MOVE_POINTS.Y;
            }
            break
        }
        case 'Y': {
            switch (o) {
                case 'A': return points + MOVE_POINTS.X;
                case 'B': return points + MOVE_POINTS.Y;
                case 'C': return points + MOVE_POINTS.Z;
            }
            break
        }
        case 'Z': {
            switch (o) {
                case 'A': return points + MOVE_POINTS.Y;
                case 'B': return points + MOVE_POINTS.Z;
                case 'C': return points + MOVE_POINTS.X;
            }
            break
        }
    }

    return 0;
}

const totalPoints = rounds.reduce((acc, round) => acc + playRound(round), 0);

console.log('b', totalPoints);