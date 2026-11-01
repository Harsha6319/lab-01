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
        section: "CSE(QE-2B)"
    });
});

app.get('/time', (req, res) => {
    res.status(200).json({
        currentTime: new Date().toISOString()
    });
});

app.use((req, res) => {
    res.status(404).send('404 page not found');
});

app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});
