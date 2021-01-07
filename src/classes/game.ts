import { gameID } from "../utils/idGen";
import { Card } from "./card";
import { Player } from "./player";
import { Round } from "./round";

export class Game {
    private id: string;
    private players: Array<Player>;
    private roundCounter: number;
    private round!: Round;

    constructor() {
        this.id = gameID();
        this.players = new Array<Player>();
        this.roundCounter = 3;
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    startNewRound(): void {
        this.round = new Round(this.roundCounter, this.players);
        this.round.start();
    }

    playTurn(playerID: string, card: Card): void {
        let end = this.round.playTurn(playerID, card);
        if (end) {
            this.endRound();
        }
    }

    endRound(): void {
        console.log(`Round ${this.roundCounter} end.`);
        this.roundCounter++;
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
