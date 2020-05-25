"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const compression = require("compression");
const swaggerUi = require("swagger-ui-express");
const fs_1 = require("fs");
const cors = require('cors');
class Server {
    constructor() {
        this.port = 7000;
        this.setRoutes = () => {
            this.app.use("/api/user", (req, res) => {
                console.log('user request made');
                res.status(200).json({ name: 'Kingsford Asimadu' });
            });
        };
        this.startServer = () => {
            var httpServer = http.createServer(this.app);
            httpServer.listen(this.port);
            httpServer.on('error', this.onError);
            httpServer.on('listening', this.onServerListen);
        };
        //When hosting a client app such as angular - map the path to the client dist folder
        this.setStaticFolders = () => {
            // var path = require('path');
            // let clientPath = path.join(__dirname, '../<client folder>/dist');
            //console.log(`adding static folder: ${clientPath}`)
            // this.app.use(express.static(clientPath));
        };
        this.setSwagger = () => {
            let swaggerDocument = require('./swagger.json');
            this.app.use('/explorer', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { "showExplorer": true }));
            console.log(`For exploring the apis open: http://localhost:${this.port}/explorer`);
        };
        this.onServerListen = () => {
            console.log('App listening on port ' + this.port);
            console.log("you are running in " + process.env.NODE_ENV + " mode.");
        };
        this.onError = (err) => {
            switch (err.code) {
                case 'EACCES':
                    console.error('port requires elevated privileges');
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    console.error('port is already in use');
                    process.exit(1);
                    break;
                default:
                    throw err;
            }
        };
        this.setErrorHandlers = () => {
            this.app.use((err, req, res, next) => {
                res.status(err.status || 500);
                res.send({
                    message: err.message,
                    error: err
                });
            });
        };
        this.app = express();
        this.app.use(cors());
        this.app.use(compression());
        this.app.use(bodyParser.json()); // support json encoded bodies
        this.app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
        this.port = process.env.PORT || this.port;
    }
    setDynamicSwagger() {
        this.app.use('/explorer', swaggerUi.serve, async (req, res, next) => {
            try {
                let swaggerDocument = this.loadSwaggerJson();
                let func = swaggerUi.setup(swaggerDocument, { "showExplorer": true });
                func(req, res);
                next();
            }
            catch (err) {
                next(err);
            }
        });
        console.log(`For exploring the apis open: http://localhost:${this.port}/explorer`);
    }
    loadSwaggerJson() {
        if (fs_1.existsSync("swagger.json")) {
            let fileContent = fs_1.readFileSync("swagger.json");
            return JSON.parse(fileContent);
        }
        else {
            console.log("swagger.json file does not exist in this folder ", __dirname);
            return null;
        }
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map