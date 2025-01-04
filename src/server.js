import { AppRouter } from './router';
import { CustomError } from './test/error-handler';

const express = require('express');


const SERVER_PORT = 3001;

export class Server {
    constructor(app) {
        this.app = app;
        this.app.use(express.json());
        this.app.use(cors());
        
    }

    start() {
        this.appRoutes(this.app);
        this.globalErrorHandler(this.app);
        this.app.listen(SERVER_PORT, () => {
            console.log('Server is running on port 3001');
        });
    }

    appRoutes(app) {
        const appRouter = new AppRouter();
        app.use(appRouter.routes());
    }

    globalErrorHandler(app) {
        app.all('*', (req, res) => {
          res.status(HTTP_STATUS.NOT_FOUND).json({ message: `${req.originalUrl} not found` });
        });
    
        app.use((err, req, res, next) => {
          logger.error(err);
          if (err instanceof CustomError) {
            return res.status(err.status).json(err.serializeErrors());
          }
          next();
        });
      }

}