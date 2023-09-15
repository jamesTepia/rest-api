import express from "express";
import mongoose from "mongoose";
import config from "./config/index.js";
import connection from "./frameworks/database/mongodb/connection.js";
import expressConfig from "./frameworks/webserver/express.js";
import routes from "./frameworks/webserver/routes/index.js";
import errorMiddleware from "./frameworks/webserver/middleware/errorMiddleware.js";
import serverConfig from "./frameworks/webserver/server.js";

const app = express();
expressConfig(app);
routes(app, express);
connection(mongoose, config).connectToMongo();
app.use(errorMiddleware);

serverConfig(app, config).startServer();
