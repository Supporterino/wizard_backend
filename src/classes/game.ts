import { gameID } from "../utils/idGen";
import { Player } from "./player";
import { Round } from "./round";

export class Game {
    private id: string;
    private players: Array<Player>;
    private roundCounter: number;
    private round!: Round;

    constructor() {
        this.id = gameID();
        this.players = new Array<Player>();
        this.roundCounter = 1;
    }

    addPlayer(player: Player) {
        this.players.push(player);
    }

    startNewRound() {
        this.round = new Round(this.roundCounter, this.players);
        this.round.start();
        this.roundCounter++;
    }
}
