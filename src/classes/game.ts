import { gameID } from "../utils/idGen";
import { Deck } from "./deck";

export class Game {
    private pile: Deck;
    private id: string;

    constructor() {
        this.id = gameID();
        this.pile = new Deck();
    }
}
