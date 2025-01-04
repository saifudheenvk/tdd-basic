const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.get('/add-numbers', (req, res) => {
    const { numberString } = req.query;
    const result = addNumbers(numberString);
    res.json({ result });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});