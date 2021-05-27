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
            log.info(`[Game ${this.id}] Starting.`);
            this.scoreboard = new Scoreboard(this.players);
            this.startNewRound();
            return true;
        } else {
            log.warn(`[Game ${this.id}] Player ${playerID} tired to start but isn't the host.`);
            return false;
        }
    }

    addPlayer(playerID: string): void {
        log.debug(`[Game ${this.id}] Adding ${playerID}.`);
        this.players.push(new Player(playerID));
    }

    startNewRound(): void {
        this.round = new Round(this.roundCounter, this.players);
        this.round.start();
        this.state = GameState.Predicting;
        this.activePlayer = this.round.next().player;
        log.info(`[Game ${this.id}] Starting Round ${this.roundCounter}.`);
        log.silly(`[Game ${this.id}] Initial player is ${this.activePlayer.getID()}.`);
    }

    continue(): void {
        const returnVal = this.round.next();
        this.activePlayer = returnVal.player;
        if (returnVal.break && this.state == GameState.Predicting) {
            this.state = GameState.Playing;
            log.debug(`[Game ${this.id}] Switching GameState to Playing.`);
        }
        log.silly(`[Game ${this.id}] Next player is ${this.activePlayer.getID()}.`);
    }

    givePrediction(playerID: string, val: number): void {
        log.debug(`[Game ${this.id}] Player (${playerID}) setting prediction to ${val}.`);
        if (playerID === this.activePlayer.getID()) {
            this.scoreboard.receivePrediction(this.activePlayer, this.roundCounter, val);
            this.continue();
        } else {
            log.warn(`[Game ${this.id}] No matching player for ID: ${playerID}. Active player is ${this.activePlayer.getID()}.`);
        }
    }

    playTurn(playerID: string, card: Card): PlayResult | undefined {
        log.debug(`[Game ${this.id}] ${playerID} is playing a card.`);
        log.silly(`[Game ${this.id}] ${playerID} is playing this card:`, card);
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
            log.warn(`[Game ${this.id}] No matching player for ID: ${playerID}. Active player is ${this.activePlayer.getID()}.`);
            return undefined;
        }
    }

    updatePlayersAfterTurn(winningPlayer: Player): void {
        const splitPoint = this.players.indexOf(winningPlayer);
        log.silly(`[Game ${this.id}] Splitting players at index ${splitPoint}. Players is:`, this.players);
        this.players = this.moveByX(this.players, splitPoint);
        log.silly(`[Game ${this.id}] Players after moving is:`, this.players);
        this.round.updatePlayer(this.players);
    }

    moveByX(arr: Array<Player>, point: number): Array<Player> {
        const initial = arr;
        const cutPart = initial.splice(0, point);
        log.silly(`[Game ${this.id}] Cut this from array: `, cutPart);
        const out = initial.concat(cutPart);
        return out;
    }

    endTurn(): PlayResult {
        log.debug(`[Game ${this.id}] Ending turn.`);
        const winnerOfTurn = this.round.analyzeTurn();
        log.debug(`[Game ${this.id}] Turn winner is ${winnerOfTurn.getID()}`);
        winnerOfTurn.addHit();
        this.updatePlayersAfterTurn(winnerOfTurn);

        const end = this.round.startNewTurn();

        if (end) {
            log.info(`[Game ${this.id}] Round ${this.roundCounter} is over.`);
            this.scoreboard.analyzeRound(this.roundCounter);
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
        log.debug(`[Game ${this.id}] Returning hand for ${playerID}.`);
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
