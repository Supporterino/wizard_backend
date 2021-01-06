import { Card } from "./card";

export class Player {
    private hand: Array<Card>;
    private id: string;

    constructor(inID: string) {
        this.id = inID;
        this.hand = new Array<Card>();
    }
}
