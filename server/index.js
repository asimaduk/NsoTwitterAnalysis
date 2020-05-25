"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const path = require("path");
const dotenv_display_1 = require("dotenv-display");
//Load and display config variables defined in .env file
let configPath = path.join(__dirname, "./.env");
let env = dotenv_1.config({ path: configPath });
dotenv_display_1.displayEnv(env.parsed);
const server_1 = require("./server");
//Load server
const server = new server_1.Server();
server.setRoutes();
server.setStaticFolders();
//server.setSwagger();
server.setDynamicSwagger();
server.setErrorHandlers();
server.startServer();
//# sourceMappingURL=index.js.map