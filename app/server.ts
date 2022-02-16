import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

import app from './src/app'
import http from 'http'
import Db from './db'
// App


const port = process.env.TLDV_NODE_PORT;
app.set('port', process.env.TLDV_NODE_PORT);

const server = http.createServer(app);
server.listen(port);

Db();

server.on('error', onError);
server.on('listening', onListening);

function onError(error: any) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + port;
    console.log('Listening on ' + bind);
  }