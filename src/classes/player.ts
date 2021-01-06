import { removeElement } from "../utils/arrayLogic";
import { Card } from "./card";

export class Player {
    private hand: Array<Card>;
    private id: string;

    constructor(inID: string) {
        this.id = inID;
        this.hand = new Array<Card>();
    }

    getHand(): Array<Card> {
        return this.hand;
    }

    receiveCard(card: Card): void {
        this.hand.push(card);
    }

    playCard(card: Card): Card {
        return removeElement(this.hand, card);
    }

    getID(): string {
        return this.id;
    }

    toString(): string {
        let output = `Player{id: ${this.id}, hand:[ \n`;
        for (const card of this.hand) {
            output += `\t ${card.toString()} \n`;
        }
        output += ']}';
        return output;
    }
}
