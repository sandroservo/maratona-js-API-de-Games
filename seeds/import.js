const fs = require('fs')
const dotenv = require('dotenv');
const { Schema, model, connect } = require('mongoose');

dotenv.config();

const connectToDB = () => {
    const options = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFinfAndMOdify: false,
    };
    return connect(process.env.DARABASE, options);
};

const parseJSON = (data) => {
    try {
       return JSON.parse(data)
    } catch (error) {
        return null;

    }
};

const readGamesFromFile = (filename) => {
    const promiseCallback = (resolve, reject) =>{
        fs.readFile(filename, (err, data) => {
            if(err) return recjet(err);
            const json =  parseJSON(data)
            if(!json) return reject(`Not able to parse JSON file ${filename}`);
            return resolve(json)
        });
    };


    return new Promise(promiseCallback);
};

const importGames =  () => {
    readGamesFromFile('games.json').then(console.log).catch(console.error);
};

importGames();