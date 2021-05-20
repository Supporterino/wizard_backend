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
    // private startingOrder!: Array<Player>;
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
            // this.startingOrder = this.players;
            this.scoreboard = new Scoreboard(this.players);
            this.startNewRound();
            return true;
        } else {
            return false;
        }
    }

    addPlayer(playerID: string): void {
        log.debug(`Adding ${playerID} to game ${this.id}.`);
        this.players.push(new Player(playerID));
    }

    startNewRound(): void {
        // this.startingOrder = this.moveByX(this.startingOrder, 1);
        // this.players = this.startingOrder; //[...this.startingOrder];
        this.round = new Round(this.roundCounter, this.players);
        this.round.start();
        this.state = GameState.Predicting;
        this.activePlayer = this.round.next().player;
        log.debug(`Starting Round ${this.roundCounter}.`);
        log.debug(`Initial player is ${this.activePlayer.getID()}.`);
    }

    continue(): void {
        const val = this.round.next();
        this.activePlayer = val.player;
        if (val.break && this.state == GameState.Predicting)
            this.state = GameState.Playing;
        log.debug(`Next player is ${this.activePlayer.getID()}.`);
    }

    givePrediction(playerID: string, val: number): void {
        log.debug(`${playerID} setting prediction to ${val}.`);
        if (playerID === this.activePlayer.getID()) {
            this.scoreboard.receivePrediction(
                this.activePlayer,
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

    playTurn(playerID: string, card: Card): PlayResult | undefined {
        log.debug(`${playerID} is playing card: ${card.toString()}`);
        if (playerID === this.activePlayer.getID()) {
            const end = this.round.playTurn(playerID, card);
            if (end) {
                const out = this.endTurn();
                return out;
            } else {
                this.continue();
                return { turnEnd: false, roundEnd: false, winner: 'none' };
            }
        } else {
            log.debug(
                `No matching player for ID: ${playerID}. Active player is ${this.activePlayer.getID()}`
            );
            return undefined;
        }
    }

    updatePlayersAfterTurn(winningPlayer: Player): void {
        const splitPoint = this.players.indexOf(winningPlayer);
        log.debug(`Splitpoint: ${splitPoint}`);
        this.players = this.moveByX(this.players, splitPoint);
        this.round.updatePlayer(this.players);
    }

    moveByX(arr: Array<Player>, point: number) {
        const temp = arr;
        const front = temp.splice(0, point);
        log.debug(`Cut part`, front);
        return temp.concat(front);
    }

    endTurn(): PlayResult {
        log.debug(`Turn end.`);
        const winnerOfTurn = this.round.analyzeTurn();
        log.debug(`Winner of Turn: ${winnerOfTurn.getID()}`);
        winnerOfTurn.addHit();
        this.updatePlayersAfterTurn(winnerOfTurn);

        const end = this.round.startNewTurn();
        if (end) {
            this.scoreboard.analyzeRound(this.roundCounter);
            log.debug(`Round ${this.roundCounter} is over.`);
            this.roundCounter++;
            this.startNewRound();
            return {
                turnEnd: true,
                roundEnd: true,
                winner: winnerOfTurn.getID(),
            };
        } else {
            this.continue();
            return {
                turnEnd: true,
                roundEnd: false,
                winner: winnerOfTurn.getID(),
            };
        }
    }

    printScoreboard(): string {
        return this.scoreboard.toString();
    }

    getDC(): Card {
        return this.round.getDominantColor();
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

    getMaxRC(): number {
        return this.scoreboard.getMaxRoundNumber();
    }

    getScoreboard(): Scoreboard {
        return this.scoreboard;
    }

    getActivePlayer(): Player {
        return this.activePlayer;
    }

    getHand(playerID: string): Array<Card> {
        const out = this.players.filter((e) => e.getID() === playerID);
        return out[0].getHand();
    }

    getPile(): Array<Card> {
        return this.round.getPile();
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

export interface PlayResult {
    turnEnd: boolean;
    roundEnd: boolean;
    winner: string;
}
