//giuseppe :An attributed controller routing system for expressJS with typescript decorators and annotations
import { registerControllersFromFolder } from 'giuseppe';
import express = require('express');
import bodyParser = require('body-parser');

export class Server {

    static startServer() {
        let app = express();
        app.use(bodyParser.json());

        registerControllersFromFolder({ folderPath: './app/services' })
            .then(router => {
                app.use(router);
                /* start express server */
            })
            .catch(err => {
                /* error happened during loading and registering */
            });

        app.listen(7000, () => {
            console.log('Up and running on port 7000');
        });
    }
}
exports.startServer = Server.startServer;

// Call a module's exported functions directly from the command line.
require('make-runnable');