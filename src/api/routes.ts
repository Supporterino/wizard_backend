import Router from 'express';
import { log } from '..';
import { Game } from '../classes/game';
import { Player } from '../classes/player';
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

router.post('/addPlayer', (req, res) => {
    const { gameID, playerID } = req.body;

    if (gameID === '') {
        log.warn(`Tried to add player without gameID.`, req.body);
        res.status(409).json({
            msg: 'No game id present in body.',
        });
    }

    const game = controller.getGameById(gameID);

    if (playerID === '') {
        log.warn(`Tried to add player without playerID.`, req.body);
        res.status(409).json({
            msg: `No player id present in body to add to game(${game.getID()}).`,
        });
    }

    const player: Player = new Player(playerID);
    game.addPlayer(player);

    res.status(200).json();
});

router.post('/startGame', (req, res) => {
    const { gameID, playerID } = req.body;

    if (gameID === '') {
        log.warn(`Tried to start game without gameID.`, req.body);
        res.status(409).json({
            msg: 'No game id present in body.',
        });
    }

    const game = controller.getGameById(gameID);

    if (playerID === '') {
        log.warn(`Tried to start game without playerID.`, req.body);
        res.status(409).json({
            msg: `No player id present in body to add to game(${game.getID()}).`,
        });
    }

    const result: boolean = game.startGame(playerID);

    if (result) {
        log.info(`Game (${game.getID()}) started.`);
        res.status(200).json({ msg: `Game (${game.getID()}) started.` });
    } else {
        log.warn(
            `Non leader player (${playerID}) tried to start game (${game.getID()}).`
        );
        res.status(403).json({
            msg: `Error: Player (${playerID}) is not leader of game (${game.getID()}).`,
        });
    }
});
