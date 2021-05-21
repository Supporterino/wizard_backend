import Router from 'express';
import { log } from '..';
import { Game } from '../classes/game';
import { GameController } from '../utils/gameController';

export const router = Router();
export const controller: GameController = new GameController();

router.get('/newGame', (req, res) => {
    log.debug(`[REST API <-] Initialization request.`);
    const newGame: Game = new Game();
    controller.addGame(newGame);

    log.debug(`[REST API ->] Send out game ID (${newGame.getID()}).`);
    res.json({
        msg: 'Game created.',
        gameID: `${newGame.getID()}`,
    });
});

router.get('/getGame/:id', (req, res) => {
    log.debug(`[REST API <-] Full game print out.`);
    const id: string = req.params.id;
    const game = controller.getGameById(id);

    res.json(game);
});

router.get('/getPlayers/:id', (req, res) => {
    const id: string = req.params.id;
    log.debug(`[REST API <-] Retrieving players for match ${id}.`);
    const game = controller.getGameById(id);

    res.json(game.getPlayers());
});

router.get('/getState/:id', (req, res) => {
    const id: string = req.params.id;
    log.debug(`[REST API <-] Retrieving state for match ${id}.`);
    const game = controller.getGameById(id);

    res.json(game.getState());
});

router.get('/getRoundCounter/:id', (req, res) => {
    const id: string = req.params.id;
    log.debug(`[REST API <-] Retrieving round counter for match ${id}.`);
    const game = controller.getGameById(id);

    res.json(game.getRC());
});

router.get('/getMaxRoundCounter/:id', (req, res) => {
    const id: string = req.params.id;
    log.debug(`[REST API <-] Retrieving max rounds for match ${id}.`);
    const game = controller.getGameById(id);

    res.json(game.getMaxRC());
});

router.get('/getActivePlayer/:id', (req, res) => {
    const id: string = req.params.id;
    log.debug(`[REST API <-] Retrieving active player for match ${id}.`);
    const game = controller.getGameById(id);

    res.json(game.getActivePlayer().getID());
});

router.post('/getHand', (req, res) => {
    const { gameID, playerID } = req.body;
    log.debug(
        `[REST API <-] Retrieving hand for match ${gameID} and player ${playerID}.`
    );
    const game = controller.getGameById(gameID);

    res.json(game.getHand(playerID));
});

router.get('/getScoreboard/:id', (req, res) => {
    const id: string = req.params.id;
    log.debug(`[REST API <-] Retrieving scoreboard for match ${id}.`);
    const game = controller.getGameById(id);

    res.json(game.getScoreboard());
});

router.get('/getDomColor/:id', (req, res) => {
    const id: string = req.params.id;
    log.debug(`[REST API <-] Retrieving dominant color for match ${id}.`);
    const game = controller.getGameById(id);

    res.json(game.getDC());
});
