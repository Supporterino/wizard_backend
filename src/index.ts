import { Logger } from 'tslog';
import helmet from 'helmet';
import cors from 'cors';
import express from 'express';

export const log: Logger = new Logger({
    name: 'wizard_backend',
    minLevel: 'silly',
    dateTimeTimezone: 'Europe/Berlin'
});

const app: express.Application = express();

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
