import { createServer } from 'http';
import { httpServerErrorHandling, onListening } from './lib/app.functs';
import * as express from 'express';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';

// * Routes
import IndexRouter from './routes/index.routes';

import cors = require('cors');
console.log('Server starting.');
const app = express();

/**
 * ? Sunucu ayaları vs.
 */
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(
	express.urlencoded({
		extended: false,
	}),
);

// * Routes ataçlama
app.use('/', IndexRouter);

// * 404 Response handler. Auto route for static files.
app.use((_req: express.Request, res: express.Response) => res.redirect('/'));

console.log('Data Source has been initialized!');
const port = process.env.PORT || '3000';
app.set('port', port);

const server = createServer(app);

server.listen(port);

server.on('error', (error) => httpServerErrorHandling(error, port));
server.on('listening', () => onListening(server, port));
