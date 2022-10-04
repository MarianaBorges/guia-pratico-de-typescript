import express, { Application } from "express";
import Database from "./infra/db";

import './shared/container';
import newsRouter from "./routes/newsRouter";
import videosRouter from "./routes/videosRouter";
import galeriaRouter from "./routes/galeriaRouter";
import podcastRouter from "./routes/podcastRouter";

class StartUp {
    public app: Application;
    private _db = new Database();

    constructor(){
        this.app = express();
        this._db.createConnection();
        this.routes();
    }

    routes(){
        this.app.route("/").get((req, res) => {
            res.send({versao:"0.0.2"})
        });

        this.app.use("/", newsRouter);
        this.app.use("/", videosRouter);
        this.app.use("/", galeriaRouter);
        this.app.use("/", podcastRouter);
    }
} 

export default new StartUp();