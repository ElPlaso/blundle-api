import express from 'express'
import { getLatestPuzzle } from './db/index.js';

const app = express()
const port = 3000

app.get('/daily-puzzle', async (_req, res) => {
    const puzzleEntry = await getLatestPuzzle();

    if (!puzzleEntry) {
        res.send('No puzzle found');
        return;
    }

    res.send(puzzleEntry);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})