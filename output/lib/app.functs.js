"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onListening = exports.httpServerErrorHandling = void 0;
function httpServerErrorHandling(error, port) {
    if (error.syscall !== 'listen')
        throw error;
    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
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
exports.httpServerErrorHandling = httpServerErrorHandling;
function onListening(server, port) {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + port;
    console.log('Listening on ' + bind);
}
exports.onListening = onListening;
