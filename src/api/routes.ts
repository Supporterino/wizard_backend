import Router from 'express';
import { log } from '..';
import { Game } from '../classes/game';
import { Player } from '../classes/player';
import { GameController } from '../utils/gameController';

export const router = Router();
export const controller: GameController = new GameController();

router.get('/newGame', (req, res) => {
    const newGame: Game = new Game();
    controller.addGame(newGame);

    res.json({
        msg: 'Game created.',
        gameID: `${newGame.getID()}`,
    });
});

router.get('/getGame/:id', (req, res) => {
    const id: string = req.params.id;
    const game = controller.getGameById(id);

    res.json(game);
});

router.get('/getPlayers/:id', (req, res) => {
    const id: string = req.params.id;
    const game = controller.getGameById(id);

    res.json(game.getPlayers());
});

router.get('/getState/:id', (req, res) => {
    const id: string = req.params.id;
    const game = controller.getGameById(id);

    res.json(game.getState());
});

router.get('/getRoundCounter/:id', (req, res) => {
    const id: string = req.params.id;
    const game = controller.getGameById(id);

    res.json(game.getRC());
});

router.get('/getActivePlayer/:id', (req, res) => {
    const id: string = req.params.id;
    const game = controller.getGameById(id);

    res.json(game.getActivePlayer().getID());
});

router.post('/getHand', (req, res) => {
    const { gameID, playerID } = req.body;
    const game = controller.getGameById(gameID);

    res.json(game.getHand(playerID));
});

router.get('/getScoreboard/:id', (req, res) => {
    const id: string = req.params.id;
    const game = controller.getGameById(id);

    res.json(game.getScoreboard());
});

router.get('/getDomColor/:id', (req, res) => {
    const id: string = req.params.id;
    const game = controller.getGameById(id);

    res.json(game.getDC());
});
// router.post('/addPlayer', (req, res) => {
//     const { gameID, playerID } = req.body;

//     if (gameID === '') {
//         log.warn(`Tried to add player without gameID.`, req.body);
//         res.status(409).json({
//             msg: 'No game id present in body.',
//         });
//     }

//     const game = controller.getGameById(gameID);

//     if (playerID === '') {
//         log.warn(`Tried to add player without playerID.`, req.body);
//         res.status(409).json({
//             msg: `No player id present in body to add to game(${game.getID()}).`,
//         });
//     }

//     const player: Player = new Player(playerID);
//     game.addPlayer(player);

//     res.status(200).json();
// });

// router.post('/startGame', (req, res) => {
//     const { gameID, playerID } = req.body;

//     if (gameID === '') {
//         log.warn(`Tried to start game without gameID.`, req.body);
//         res.status(409).json({
//             msg: 'No game id present in body.',
//         });
//     }

//     const game = controller.getGameById(gameID);

//     if (playerID === '') {
//         log.warn(`Tried to start game without playerID.`, req.body);
//         res.status(409).json({
//             msg: `No player id present in body to add to game(${game.getID()}).`,
//         });
//     }

//     const result: boolean = game.startGame(playerID);

//     if (result) {
//         log.info(`Game (${game.getID()}) started.`);
//         res.status(200).json({ msg: `Game (${game.getID()}) started.` });
//     } else {
//         log.warn(
//             `Non leader player (${playerID}) tried to start game (${game.getID()}).`
//         );
//         res.status(403).json({
//             msg: `Error: Player (${playerID}) is not leader of game (${game.getID()}).`,
//         });
//     }
// });

// router.post('/prediction', (req, res) => {
//     const { playerID, gameID, input } = req.body;

//     if (gameID === '') {
//         log.warn(`Tried to give prediction without gameID.`, req.body);
//         res.status(409).json({
//             msg: 'No game id present in body.',
//         });
//     }

//     const game = controller.getGameById(gameID);

//     if (playerID === '') {
//         log.warn(`Tried to give prediction without playerID.`, req.body);
//         res.status(409).json({
//             msg: `No player id present to give prediction in game(${game.getID()}).`,
//         });
//     }

//     game.givePrediction(playerID, input);

//     res.status(200).json();
// });

// router.post('/play', (req, res) => {
//     const { playerID, gameID, input } = req.body;
//     const card = JSON.parse(input);

//     if (gameID === '') {
//         log.warn(`Tried to play a card without gameID.`, req.body);
//         res.status(409).json({
//             msg: 'No game id present in body.',
//         });
//     }

//     const game = controller.getGameById(gameID);

//     if (playerID === '') {
//         log.warn(`Tried to play a card without playerID.`, req.body);
//         res.status(409).json({
//             msg: `No player id present to play card in game(${game.getID()}).`,
//         });
//     }

//     game.playTurn(playerID, card);

//     res.status(200).json();
// });
