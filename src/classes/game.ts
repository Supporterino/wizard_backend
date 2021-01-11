import { gameID } from "../utils/idGen";
import { Card } from "./card";
import { Player } from "./player";
import { Round } from "./round";
import { Scoreboard } from "./scoreboard";
import { log } from '../index';
import { OutgoingMessage } from "http";

export class Game {
    private id: string;
    private players: Array<Player>;
    private roundCounter: number;
    private round!: Round;
    private scoreboard!: Scoreboard;
    private activePlayer!: Player;

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
        this.activePlayer = this.round.next();
    }

    continue() {
        this.activePlayer = this.round.next();
    }

    givePrediction(playerID: string, val: number): void {
        if (playerID === this.activePlayer.getID()) {
            this.scoreboard.receivePrediction(this.players.indexOf(this.activePlayer), this.roundCounter, val);
            this.continue();
        } else {
            log.debug(`No matching player for ID: ${playerID}. Active player is ${this.activePlayer.getID()}`);
        }
    }

    playTurn(playerID: string, card: Card): void {
        if (playerID === this.activePlayer.getID()) {
            log.debug(`${playerID}`)
            const end = this.round.playTurn(playerID, card);
            this.continue();
            if (end) {
                this.endTurn();
            }
        } else {
            log.debug(`No matching player for ID: ${playerID}. Active player is ${this.activePlayer.getID()}`);
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
