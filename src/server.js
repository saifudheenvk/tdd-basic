import { AppRouter } from './router';

const express = require('express');


const SERVER_PORT = 3001;

export class Server {
    constructor(app) {
        this.app = app;
        this.app.use(express.json());
        this.app.use(cors());
        
    }

    appRoutes(app) {
        const appRouter = new AppRouter();
        app.use(appRouter.routes());
    }

    start() {
        this.appRoutes(this.app);
        this.app.listen(SERVER_PORT, () => {
            console.log('Server is running on port 3001');
        });
    }
}