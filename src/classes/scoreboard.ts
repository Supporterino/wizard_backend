import { Player } from "./player";

export class Scoreboard {
    private players: Array<Player>;
    private board!: Array<Array<ScoreEntry>>;

    constructor(plrs: Array<Player>) {
        this.players = plrs;
        this.initBoard();
    }

    initBoard() {
        this.board = new Array<Array<ScoreEntry>>(this.players.length);
        const max = this.getMaxRoundNumber();
        for (let index = 0; index < this.board.length; index++) {
            this.board[index] = new Array<ScoreEntry>(max);
        }
    }

    receivePrediction(index: number, rc: number, val: number) {
        this.board[index][rc].setTarget(val);
    }

    analyzeRound(rc: number) {
        for (let index = 0; index < this.board.length; index++) {
            if (rc == 1) {
                const roundScore = this.getScoreForRound(this.board[index][rc].getTarget(), this.players[index].pullHit());
                this.board[index][rc].setScore(roundScore);
            } else {
                const roundScore = this.getScoreForRound(this.board[index][rc].getTarget(), this.players[index].pullHit());
                this.board[index][rc].setScore(this.board[index][rc - 1].getScore() + roundScore);
            }
        }
    }

    getScoreForRound(target: number, hit: number): number {
        if (target == hit) {
            return 20 + hit * 10;
        } else {
            return -10 + Math.abs(target - hit) * (-10)
        }
    }

    getMaxRoundNumber(): number {
        switch (this.players.length) {
            case 3:
                return 20;
            case 4:
                return 15;
            case 5:
                return 12;
            case 6:
                return 10;
            default:
                return 0;
        }
    }
}

class ScoreEntry {
    private target!: number;
    private score: number;

    constructor() {
        this.score = 0;
    }

    getScore(): number {
        return this.score;
    }

    getTarget(): number {
        return this.target
    }

    setScore(val: number) {
        this.score = val;
    }

    setTarget(val: number) {
        this.target = val;
    }
}

// 6 - 10
// 5 - 12
// 4 - 15
// 3 - 20