const express = require('express');
const dotenv =  require('dotenv');
dotenv.config();

const connect =  require('./models/index');
const gamesRouter =  require('./routes/games');

const app =  express();
connect()

app.use('/games',gamesRouter);

app.get("/", (req, res) => {
    return res.json({messaga:"API OK !!!"})
})

app.listen(3333, () => {
    console.log('api running on port 3333')
})