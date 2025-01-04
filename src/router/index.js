const express = require('express');
const Apis = require('../controller');

class AppRouter {
    constructor() {
        this.router = express.Router();
    }

    routes() {
        this.router.get('/api', (req, res) => {
            res.json({ message: 'Hello from server!' });
        });
        this.router.get('/api/add-numbers', Apis.prototype.addNumbers);
        return this.router;
    }
}

module.exports = AppRouter