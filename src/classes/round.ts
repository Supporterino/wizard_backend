import { Card } from "./card";
import { Deck } from "./deck";
import { Player } from "./player";

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

    next(): Player {
        if (this.pointer < this.players.length - 1) {
            return this.players[this.pointer++];
        } else {
            this.pointer = 0;
            return this.players[this.players.length - 1];
        }
    }

    start() {
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

    setDomColor() {
        const topCard = this.deck.getTopCard();
        if (topCard) this.dominantColor = topCard;
        else this.dominantColor = new Card('', '');
    }

    playTurn(card: Card): boolean {
            const toPlay = this.players[this.pointer].playCard(card);
            this.addCardToPile(toPlay);
    
            if (this.pointer != this.players.length - 1) {
                return false;
            } else {
                return true;
            }
    }

    analyzeTurn(): Player {
        let turncolor = '';
        let winningCard: Card = this.pile[0];
        for (let index = 0; index < this.pile.length; index++) {
            if (turncolor === '' && this.pile[index].getColor() !== 'white') turncolor = this.pile[index].getColor();
            if (this.pile[index].getChar() === 'Sorcerer' && winningCard.getChar() !== 'Sorcerer') winningCard = this.pile[index];
            if (winningCard.getChar() !== 'Sorcerer') {
                if (this.pile[index].getColor() === this.dominantColor.getColor() && winningCard.getColor() !== this.dominantColor.getColor()) winningCard = this.pile[index];
                else if (this.pile[index].getColor() === this.dominantColor.getColor() && winningCard.getColor() === this.dominantColor.getColor() && +this.pile[index].getChar() >= +winningCard.getChar()) winningCard = this.pile[index];
                else if (this.pile[index].getColor() === turncolor && +this.pile[index].getChar() >= +winningCard.getChar()) winningCard = this.pile[index];
            }
        }
        return this.players[this.pile.indexOf(winningCard)];
    }

    addCardToPile(card: Card): void {
        this.pile.push(card);
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