import { gameID } from "../utils/idGen";
import { Player } from "./player";

export class Game {
    private id: string;
    private players: Array<Player>;

    constructor() {
        this.id = gameID();
        this.players = new Array<Player>();
    }
}
