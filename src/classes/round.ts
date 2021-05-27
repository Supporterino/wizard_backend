import { Card } from './card';
import { Deck } from './deck';
import { Player } from './player';
import { log } from '../index';

export class Round {
    private num: number;
    private deck: Deck;
    private players: Array<Player>;
    private pile: Array<Card>;
    private turnCounter: number;
    private turns: number;
    private pointer: number;
    private dominantColor!: Card;

    constructor(n: number, plrs: Array<Player>) {
        this.num = n;
        this.players = plrs;
        this.turnCounter = 0;
        this.turns = n;
        this.pointer = 0;
        this.deck = new Deck();
        this.pile = new Array<Card>();
    }

    next(): PlayerReturn {
        if (this.pointer < this.players.length) {
            log.debug(`[Round] Returning player at ${this.pointer} and increasing.`);
            return { player: this.players[this.pointer++], break: false };
        } else {
            log.debug(`[Round] Returning player at ${this.pointer} and resetting.`);
            this.pointer = 0;
            return { player: this.players[this.pointer++], break: true };
        }
    }

    start(): void {
        log.debug(`[Round] Starting Round ${this.num}.`);
        log.silly(`[Round] Setting up Deck.`);
        this.deck.setNewDeck();

        log.silly(`[Round] Dealing Cards to Players.`);
        for (let index = 0; index < this.num; index++) {
            for (const player of this.players) {
                this.deck.dealCard(player);
            }
        }

        log.silly(`[Round] Set DominantColor.`);
        this.setDomColor();
    }

    startNewTurn(): boolean {
        log.debug(`[Round] Starting new turn.`);
        this.pointer = 0;
        this.pile = new Array<Card>();
        this.turnCounter++;
        if (this.turnCounter === this.turns) {
            log.debug(`[Round] All turns of round played.`);
            return true;
        } else {
            log.silly(`[Round] Turn ${this.turnCounter}/${this.turns}`);
            return false;
        }
    }

    setDomColor(): void {
        const topCard = this.deck.getTopCard();
        if (topCard) {
            log.debug(`[Round] DominantColor is ${topCard.getColor()}.`);
            this.dominantColor = topCard;
        } else {
            log.warn(`[Round] No Card received from deck.`);
            this.dominantColor = new Card('', '');
        }
    }

    playTurn(playerID: string, card: Card): boolean {
        const toPlay = this.players.filter((e) => e.getID() == playerID)[0].playCard(card);

        log.silly(`[Round] ${playerID} is adding ${toPlay} to the pile.`);

        this.addCardToPile(toPlay);

        if (playerID == this.players[this.players.length - 1].getID()) {
            log.silly(`[Round] Turn is over.`);
            return true;
        } else {
            log.silly(`[Round] Turn still in progress.`);
            return false;
        }
    }

    analyzeTurn(): Player {
        log.debug(`[Round] Analyzing turn.`);
        log.silly(`[Round] Pile to use:`, this.pile);

        let turncolor = '';
        let winningCard: Card = this.pile[0];

        for (let index = 0; index < this.pile.length; index++) {
            if (turncolor === '' && this.pile[index].getColor() !== 'white') {
                turncolor = this.pile[index].getColor();
                log.debug(`[Round] TurnColor is ${turncolor}.`);
            }
            if (this.pile[index].getChar() === 'Sorcerer' && winningCard.getChar() !== 'Sorcerer') {
                winningCard = this.pile[index];
                log.silly(`[Round] First Sorcerer is winning turn.`);
            }
            if (winningCard.getChar() !== 'Sorcerer') {
                if (this.pile[index].getColor() === this.dominantColor.getColor() && winningCard.getColor() !== this.dominantColor.getColor()) {
                    winningCard = this.pile[index];
                    log.silly(`[Round] First DominantColor is winning turn.`);
                } else if (
                    this.pile[index].getColor() === this.dominantColor.getColor() &&
                    winningCard.getColor() === this.dominantColor.getColor() &&
                    +this.pile[index].getChar() >= +winningCard.getChar()
                ) {
                    winningCard = this.pile[index];
                    log.silly(`[Round] Higher DominantColor is winning turn.`);
                } else if (this.pile[index].getColor() === turncolor && +this.pile[index].getChar() >= +winningCard.getChar()) {
                    winningCard = this.pile[index];
                    log.silly(`[Round] Highest TurnColor is winning turn.`);
                }
            }
        }
        log.debug(`[Round] Winning card: ${winningCard.toString()}.`);
        const winner = this.players[this.pile.indexOf(winningCard)];
        log.silly(`[Round] Winner of turn is:`, winner);
        return winner;
    }

    addCardToPile(card: Card): void {
        this.pile.push(card);
    }

    updatePlayer(newPlayers: Array<Player>): void {
        this.players = newPlayers;
    }

    getDominantColor(): Card {
        return this.dominantColor;
    }

    getPile(): Array<Card> {
        return this.pile;
    }

    toString(): string {
        let output = 'Round{pile:[ \n';
        for (const card of this.pile) {
            output += `\t ${card.toString()} \n`;
        }
        output += `], \n'`;
        output += `${this.deck.toString()}, \n`;
        output += `turn: ${this.turnCounter} of ${this.turns}}`;
        return output;
    }
}

export interface PlayerReturn {
    player: Player;
    break: boolean;
}
