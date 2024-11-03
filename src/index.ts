import express from 'express'
import cors from 'cors'
import { getLatestPuzzle } from './db/index.js';

const app = express()
app.use(cors());

const port = 3000

app.get('/daily-puzzle', async (_req, res) => {
    const puzzleEntry = await getLatestPuzzle();

    if (!puzzleEntry) {
        res.status(404).send('No puzzle found');
        return;
    }

    res.status(200).send(puzzleEntry);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})