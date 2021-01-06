import { gameID } from "../utils/idGen";
import { Card } from "./card";
import { Player } from "./player";
import { Round } from "./round";

export class Game {
    private id: string;
    private players: Array<Player>;
    private roundCounter: number;
    private round!: Round;
    private activePlayer!: Player;

    constructor() {
        this.id = gameID();
        this.players = new Array<Player>();
        this.roundCounter = 1;
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    startNewRound(): void {
        this.round = new Round(this.roundCounter, this.players);
        this.round.start();
        this.roundCounter++;
        this.activePlayer = this.players[0];
    }

    playTurn(playerID: string, card: Card): void {
        if (this.activePlayer.getID() === playerID) {
            const toPlay = this.activePlayer.playCard(card);
            this.round.addCardToPile(toPlay);

            if (this.activePlayer != this.players[this.players.length - 1]) this.activePlayer = this.players[this.players.indexOf(this.activePlayer) + 1];
            else this.endRound();
        }
    }

    endRound(): void {
        console.log(`Round ${this.roundCounter} end.`);
    }

    toString(): string {
        let output = `Game{id: ${this.id}, \n`;
        output += `counter: ${this.roundCounter}, \n`;
        output += `round: ${this.round.toString()}, \n`;
        output += `activePlayer: ${this.activePlayer.getID()}, \n`;
        output += `players: [ \n`;
        for (const player of this.players) {
            output += `\t ${player.toString()}, \n`;
        }
        output += `]}`;
        return output;
    }
}
