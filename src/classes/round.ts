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
            return { player: this.players[this.pointer++], break: false }; //return this.players[this.pointer++];
        } else {
            this.pointer = 0;
            return { player: this.players[this.pointer++], break: true };
        }
    }

    start(): void {
        this.deck.setNewDeck();

        for (let index = 0; index < this.num; index++) {
            for (const player of this.players) {
                this.deck.dealCard(player);
            }
        }

        this.setDomColor();
    }

    startNewTurn(): boolean {
        this.pointer = 0;
        this.pile = new Array<Card>();
        this.turnCounter++;
        if (this.turnCounter === this.turns) return true;
        else return false;
    }

    setDomColor(): void {
        const topCard = this.deck.getTopCard();
        if (topCard) this.dominantColor = topCard;
        else this.dominantColor = new Card('', '');
        log.debug(`Dominant Color is ${this.dominantColor.getColor()}`);
    }

    playTurn(playerID: string, card: Card): boolean {
        log.silly('Active players', this.players);
        const toPlay = this.players
            .filter((e) => e.getID() == playerID)[0]
            .playCard(card);
        log.silly(`Adding card to pile from ${playerID}`, toPlay);
        this.addCardToPile(toPlay);

        if (playerID == this.players[this.players.length - 1].getID()) {
            return true;
        } else {
            return false;
        }
    }

    analyzeTurn(): Player {
        log.debug(
            `Analyzing turn with following pile: ${this.pile.toString()}.`
        );
        let turncolor = '';
        let winningCard: Card = this.pile[0];
        for (let index = 0; index < this.pile.length; index++) {
            if (turncolor === '' && this.pile[index].getColor() !== 'white')
                turncolor = this.pile[index].getColor();
            if (
                this.pile[index].getChar() === 'Sorcerer' &&
                winningCard.getChar() !== 'Sorcerer'
            )
                winningCard = this.pile[index];
            if (winningCard.getChar() !== 'Sorcerer') {
                if (
                    this.pile[index].getColor() ===
                        this.dominantColor.getColor() &&
                    winningCard.getColor() !== this.dominantColor.getColor()
                )
                    winningCard = this.pile[index];
                else if (
                    this.pile[index].getColor() ===
                        this.dominantColor.getColor() &&
                    winningCard.getColor() === this.dominantColor.getColor() &&
                    +this.pile[index].getChar() >= +winningCard.getChar()
                )
                    winningCard = this.pile[index];
                else if (
                    this.pile[index].getColor() === turncolor &&
                    +this.pile[index].getChar() >= +winningCard.getChar()
                )
                    winningCard = this.pile[index];
            }
        }
        log.debug(`Winning card: ${winningCard.toString()}.`);
        return this.players[this.pile.indexOf(winningCard)];
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
