import { gameID } from "../utils/idGen";
import { Card } from "./card";
import { Player } from "./player";
import { Round } from "./round";
import { Scoreboard } from "./scoreboard";

export class Game {
    private id: string;
    private players: Array<Player>;
    private roundCounter: number;
    private round!: Round;
    private scoreboard!: Scoreboard;

    constructor() {
        this.id = gameID();
        this.players = new Array<Player>();
        this.roundCounter = 3;
    }

    startGame(): void {
        this.scoreboard = new Scoreboard(this.players);
        this.startNewRound();
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    startNewRound(): void {
        this.round = new Round(this.roundCounter, this.players);
        this.round.start();
    }

    givePrediction(playerID: string, val: number): void {
        if (playerID === this.round.getActivePlayer().getID()) {
            this.scoreboard.receivePrediction(this.players.indexOf(this.round.getActivePlayer()), this.roundCounter, val);
        }
    }

    playTurn(playerID: string, card: Card): void {
        if (playerID === this.round.getActivePlayer().getID()) {
            let end = this.round.playTurn(playerID, card);
            if (end) {
                this.endTurn();
            }
        }
    }

    endTurn(): void {
        const winnerOfTurn = this.round.analyzeTurn();
        winnerOfTurn.addHit();
        const end = this.round.startNewTurn();
        if (end) {
            console.log(`Round ${this.roundCounter} over.`)
        }
    }

    toString(): string {
        let output = `Game{id: ${this.id}, \n`;
        output += `counter: ${this.roundCounter}, \n`;
        output += `round: ${this.round.toString()}, \n`;
        output += `players: [ \n`;
        for (const player of this.players) {
            output += `\t ${player.toString()}, \n`;
        }
        output += `]}`;
        return output;
    }
}
