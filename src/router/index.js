const express = require('express');

class AppRouter {
    constructor() {
        this.router = express.Router();
    }

    routes() {
        this.router.get('/api', (req, res) => {
            res.json({ message: 'Hello from server!' });
        });
        this.router.get('/add-numbers', Apis.prototype.addNumbers);
        return this.router;
    }
}

export { AppRouter }