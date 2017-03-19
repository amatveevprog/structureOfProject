import express from 'express';
import {AsyncRouter} from 'express-async-router';

import getMiddlewares from './middlewares';
import getRoutes from './routes';



export default class App
{
    constructor(config)
    {
        this.config = config;
        this.server = express();
        this.server.asyncRouter = AsyncRouter();
        this.init();
    }
    init()
    {
        //1. getMiddlewares
        getMiddlewares(this.server);
        //2. getRoutes
        getRoutes(this.server);
        this.server.use(this.server.asyncRouter);
    }
    run()
    {
        this.server.get('/', (req, res) => {
            console.log(`request subdomains are: ${req.subdomains}`);
            res.send('Тестовая стартовая страница НАЧАЛА');
        });
        this.server.listen(this.config.port,()=>{
            console.log(`your fascinating APP server is listening on port ${this.config.port}`);
        });
    }
}