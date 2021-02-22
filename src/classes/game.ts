import { gameID } from '../utils/idGen';
import { Card } from './card';
import { Player } from './player';
import { Round } from './round';
import { Scoreboard } from './scoreboard';
import { log } from '../index';
import { GameState } from './GameState';

export class Game {
    private id: string;
    private players: Array<Player>;
    private roundCounter: number;
    private round!: Round;
    private scoreboard!: Scoreboard;
    private activePlayer!: Player;
    private state: GameState;

    constructor() {
        this.id = gameID();
        this.players = new Array<Player>();
        this.roundCounter = 1;
        this.state = GameState.Joining;
    }

    startGame(playerID: string): boolean {
        if (this.players[0].getID() === playerID) {
            this.state = GameState.Predicting;
            this.scoreboard = new Scoreboard(this.players);
            this.startNewRound();
            return true;
        } else {
            return false;
        }
    }

    addPlayer(player: Player): void {
        log.debug(`Adding ${player.getID()} to game ${this.id}.`);
        this.players.push(player);
    }

    startNewRound(): void {
        this.round = new Round(this.roundCounter, this.players);
        this.round.start();
        this.activePlayer = this.round.next();
        log.debug(`Starting Round ${this.roundCounter}.`);
        log.debug(`Initial player is ${this.activePlayer.getID()}.`);
    }

    continue(): void {
        this.activePlayer = this.round.next();
        log.debug(`Next player is ${this.activePlayer.getID()}.`);
    }

    givePrediction(playerID: string, val: number): void {
        log.debug(`${playerID} setting prediction to ${val}.`);
        if (playerID === this.activePlayer.getID()) {
            this.scoreboard.receivePrediction(
                this.players.indexOf(this.activePlayer),
                this.roundCounter,
                val
            );
            this.continue();
        } else {
            log.warn(
                `No matching player for ID: ${playerID}. Active player is ${this.activePlayer.getID()}.`
            );
        }
    }

    playTurn(playerID: string, card: Card): void {
        log.debug(`${playerID} is playing card: ${card.toString()}`);
        if (playerID === this.activePlayer.getID()) {
            const end = this.round.playTurn(playerID, card);
            if (end) {
                this.endTurn();
            } else {
                this.continue();
            }
        } else {
            log.debug(
                `No matching player for ID: ${playerID}. Active player is ${this.activePlayer.getID()}`
            );
        }
    }

    endTurn(): void {
        log.debug(`Turn end.`);
        const winnerOfTurn = this.round.analyzeTurn();
        log.debug(`Winner of Turn: ${winnerOfTurn.getID()}`);
        winnerOfTurn.addHit();
        const end = this.round.startNewTurn();
        if (end) {
            this.scoreboard.analyzeRound(this.roundCounter);
            log.debug(`Round ${this.roundCounter} is over.`);
            this.roundCounter++;
            this.startNewRound();
        } else {
            this.continue();
        }
    }

    printScoreboard(): string {
        return this.scoreboard.toString();
    }

    getID(): string {
        return this.id;
    }

    getPlayers(): Array<Player> {
        return this.players;
    }

    getState(): GameState {
        return this.state;
    }

    getRC(): number {
        return this.roundCounter;
    }

    getActivePlayer(): Player {
        return this.activePlayer;
    }

    getHand(playerID: string): Array<Card> {
        const out = this.players.filter((e) => e.getID() === playerID);
        return out[0].getHand();
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
