import { Game } from '../classes/game';
import { log } from '../index';
import { controllerID } from '../utils/idGen';

export class GameController {
    private id: string;
    private games: Array<Game>;

    constructor() {
        this.id = controllerID();
        this.games = new Array<Game>();
        log.info(`[GameController] (${this.id}) created.`);
    }

    addGame(val: Game): void {
        const num = this.games.push(val);
        log.info(`[GameController] (${val.getID()}) added to controller. Total games: ${num}.`);
    }

    getGameById(id: string): Game {
        const result = this.games.filter((e) => {
            return e.getID() === id;
        });
        return result[0];
    }
}
