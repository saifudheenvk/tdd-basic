const express = require('express');
const Server = require('./server');


class Application {


    initialise() {
        this.app = express();
        const server = new Server(this.app);
        server.start()
    }
}

const application = new Application();
application.initialise();