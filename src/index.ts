import { Logger } from 'tslog';

export const log: Logger = new Logger({
    name: 'wizard_backend',
    minLevel: 'silly',
    dateTimeTimezone: 'Europe/Berlin'
});

import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import { router } from './api/routes';

const app: express.Application = express();

const port = 1337;

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
app.enable('trust proxy');
app.use(cors());

app.use('/api', router);

app.use('/', (req, res) => {
    res.json(
        {
            msg: 'This is the root endpoint of wizard only. The game has two definded endpoints listed as json elements in this message.',
            apiEndpoint: 'https://wizardonline.de/api',
            clientEndpoint: 'https://wizardonline.de/client'
        }
    );
});

app.listen(port, () => {
    log.info(`Server started. Listening on port ${port}`)
});