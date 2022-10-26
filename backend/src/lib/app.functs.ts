import * as http from 'http';

interface ErrnoException extends Error {
	errno?: number;
	code?: string;
	path?: string;
	syscall?: string;
	stack?: string;
}

export function httpServerErrorHandling(error: ErrnoException, port: string) {
	if (error.syscall !== 'listen') throw error;
	const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' olarak atanan port kullanımda.');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

export function onListening(server: http.Server, port: string) {
	const addr = server.address();
	const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + port;

	console.log('Listening on ' + bind);
}
