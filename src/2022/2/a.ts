import { D2 } from "./index.ts";

const { MOVE_POINTS, OUTCOMES, rounds } = D2

const playRound = (round: typeof rounds[number]): number => {
    const [o, m] = round;
    const points = MOVE_POINTS[m as keyof typeof MOVE_POINTS];

    switch (m) {
        case 'X': {
            switch (o) {
                case 'A': return OUTCOMES.DRAW + points;
                case 'B': return OUTCOMES.LOSS + points;
                case 'C': return OUTCOMES.WIN + points;
            }
            break
        }
        case 'Y': {
            switch (o) {
                case 'A': return OUTCOMES.WIN + points;
                case 'B': return OUTCOMES.DRAW + points;
                case 'C': return OUTCOMES.LOSS + points;
            }
            break
        }
        case 'Z': {
            switch (o) {
                case 'A': return OUTCOMES.LOSS + points;
                case 'B': return OUTCOMES.WIN + points;
                case 'C': return OUTCOMES.DRAW + points;
            }
            break
        }
    }

    return 0;
}

const totalPoints = rounds.reduce((acc, round) => acc + playRound(round), 0);

console.log('a', totalPoints);