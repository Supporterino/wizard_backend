import { Logger } from 'tslog';

export const log: Logger = new Logger({
    name: 'wizard_backend',
    minLevel: 'silly',
    dateTimeTimezone: 'Europe/Berlin',
});

import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import { router, controller } from './api/routes';
import { Server, Socket } from 'socket.io';
import { createServer } from 'http';
import { Player } from './classes/player';
import { Card } from './classes/card';

const app: express.Application = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});

const port = process.env.PORT || 1337;

app.use(cors());

app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

app.use(express.json());
app.use(express.static('./client'));
app.enable('trust proxy');

app.use((req, res, next) => {
    log.silly(`Incomming request`, req.url);
    next();
});

app.use('/api', router);

app.use('/', (req, res) => {
    res.json({
        msg:
            'This is the root endpoint of wizard only. The game has two definded endpoints listed as json elements in this message.',
        apiEndpoint: 'https://wizardonline.de/api',
        clientEndpoint: 'https://wizardonline.de/client',
    });
});

const gameNamespaces = io.of(/\w{5}/gm);

gameNamespaces.on('connection', (socket: Socket) => {
    const gameSocket = socket.nsp;
    log.debug(`Socket ${gameSocket.name} established.`);

    socket.on('user-add', (playerID) => {
        const game = controller.getGameById(gameSocket.name.substring(1));

        if (playerID === '') {
            gameSocket.emit('error', {
                msg: 'Tried to add user without ID.',
            });
        }

        const player: Player = new Player(playerID);
        game.addPlayer(player);

        gameSocket.emit('user-added', game.getPlayers());
    });

    socket.on('start-game', (playerID) => {
        log.debug(`Starting game ${gameSocket.name}`);
        const game = controller.getGameById(gameSocket.name.substring(1));

        game.startGame(playerID);

        gameSocket.emit('game-started');
    });

    socket.on('prediction', (value) => {
        const game = controller.getGameById(gameSocket.name.substring(1));

        game.givePrediction(value.id, value.val);

        gameSocket.emit('new-active-player', game.getActivePlayer().getID());
        gameSocket.emit('scoreboard-update', game.getScoreboard());
        gameSocket.emit('state-update', game.getState());
        gameSocket.emit('rc-update', game.getRC());
        gameSocket.emit('dom-update', game.getDC());
    });

    socket.on('play-card', (value) => {
        const game = controller.getGameById(gameSocket.name.substring(1));

        game.playTurn(value.id, new Card(value.card.color, value.card.char));

        gameSocket.emit('new-active-player', game.getActivePlayer().getID());
        gameSocket.emit('scoreboard-update', game.getScoreboard());
        gameSocket.emit('state-update', game.getState());
        gameSocket.emit('rc-update', game.getRC());
        gameSocket.emit('dom-update', game.getDC());
    });
});

server.listen(port, () => {
    log.info(`Server started. Listening on port ${port}`);
});
