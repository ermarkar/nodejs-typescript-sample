"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const giuseppe_1 = require("giuseppe");
const express = require("express");
const bodyParser = require("body-parser");
class Server {
    static startServer() {
        let app = express();
        app.use(bodyParser.json());
        giuseppe_1.registerControllersFromFolder({ folderPath: './app/services' })
            .then(router => {
            app.use(router);
        })
            .catch(err => {
        });
        app.listen(7000, () => {
            console.log('Up and running on port 7000');
        });
    }
}
exports.Server = Server;
exports.startServer = Server.startServer;
require('make-runnable');
//# sourceMappingURL=server.js.map