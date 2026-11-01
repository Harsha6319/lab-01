const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Node.js and Express Server!');
});

app.get('/about', (req, res) => {
    res.status(200).json({
        name: "Harsha Praneeth",
        section: "CSE(QE-1B)"
    });
});

app.get('/time', (req, res) => {
    res.status(200).json({
        currentTime: new Date().toISOString()
    });
});

app.use((req, res) => {
    res.status(404).json({
        error: "404 Not Found",
        message: "The requested path does not exist."
    });
});

app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});
