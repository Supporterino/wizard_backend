import Router from 'express';
import { Game } from '../classes/game';
import { GameController } from '../utils/gameController';

export const router = Router();
const controller: GameController = new GameController();

router.get('/newGame', (req, res) => {
    const newGame: Game = new Game();
    controller.addGame(newGame);

    res.json({
        msg: 'Game created.',
        gameID: `${newGame.getID()}`,
    });
});

router.get('/gameStatus/:id', (req, res) => {
    const id: string = req.params.id;
    const game = controller.getGameById(id);

    res.json(JSON.stringify(game));
});
