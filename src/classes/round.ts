import { Card } from "./card";
import { Deck } from "./deck";
import { Player } from "./player";

export class Round {
    private num: number;
    private deck: Deck;
    private players: Array<Player>;
    private pile: Array<Card>;

    constructor(n: number, plrs: Array<Player>) {
        this.num = n;
        this.players = plrs;
        this.deck = new Deck();
        this.pile = new Array<Card>();
    }

    start() {
        this.deck.setNewDeck();

        for (let index = 0; index < this.num; index++) {
            for (const player of this.players) {
                this.deck.dealCard(player);
            }            
        }
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
        output += `${this.deck.toString()}}`;
        return output;
    }
}