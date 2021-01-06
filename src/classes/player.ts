import { Card } from "./card";

export class Player {
    private hand: Array<Card>;
    private id: string;

    constructor(inID: string) {
        this.id = inID;
        this.hand = new Array<Card>();
    }

    receiveCard(card: Card): void {
        this.hand.push(card);
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
