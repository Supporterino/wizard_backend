import { Deck } from "./deck";
import { Player } from "./player";

export class Round {
    private num: number;
    private pile: Deck;
    private players: Array<Player>;

    constructor(n: number, plrs: Array<Player>) {
        this.num = n;
        this.players = plrs;
        this.pile = new Deck();
    }

    start() {
        this.pile.setNewDeck();

        for (let index = 0; index < this.num; index++) {
            for (const player of this.players) {
                this.pile.dealCard(player);
            }            
        }
    }
}