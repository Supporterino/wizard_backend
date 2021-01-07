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
    private activePlayer: Player;

    constructor(n: number, plrs: Array<Player>) {
        this.num = n;
        this.players = plrs;
        this.turnCounter = 0;
        this.turns = n;
        this.deck = new Deck();
        this.pile = new Array<Card>();
        this.activePlayer = this.players[0];
    }

    start() {
        this.deck.setNewDeck();

        for (let index = 0; index < this.num; index++) {
            for (const player of this.players) {
                this.deck.dealCard(player);
            }            
        }
    }

    playTurn(playerID: string, card: Card): boolean {
            const toPlay = this.activePlayer.playCard(card);
            this.addCardToPile(toPlay);
    
            if (this.activePlayer != this.players[this.players.length - 1]) {
                this.activePlayer = this.players[this.players.indexOf(this.activePlayer) + 1];
                return false;
            } else {
                return true;
            }
    }

    analyzeTurn() {
        
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
        output += `activePlayer: ${this.activePlayer.getID()}}`;
        return output;
    }
}