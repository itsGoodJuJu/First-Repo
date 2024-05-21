
const pgp = require('pg-promise')();
const winston = require('winston');
const express = require('express');

const app = express()
const db = pgp('postgres://tgcfgkhx:lSF63y67HZkyROi-P34JFaGnDQZihjhV@baasu.db.elephantsql.com/tgcfgkhx');
const bodyParser = require("body-parser") // for parsing application/json
app.use(bodyParser.json())


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
});


function clientError(req, message, errorCode) {
    logger.log({
        level: "info",
        endpoint: req.path,
        method: req.method,
        query_parameters: req.query,
        path_parameters: req.params,
        body: req.body,
        ip: req.ip,
        errorCode: errorCode,
        message: message,
        timestamp: new Date(),
    })
}


let clientID = 0;
app.all('/*', (req, res, next) => {
    clientID++;
    logger.log({
        level: "info",
        endpoint: req.path,
        method: req.method,
        query_parameters: req.query,
        path_parameters: req.params,
        body: req.body,
        ip: req.ip,
        // errorCode: 400,
        timestamp: new Date(),
    });
    next();
})


app.get('/idol', async (req, res) => {
    // check to make sure GET request does not have a body
    // console.log(req.body)
    // if(req.body != 'undefined') {
    if(Object.keys(req.body).length != 0) {
        clientError(req, "Request body is not permitted", 400);
        res.status(400).json({
            error: "Request body is not permitted"
        });
    } 
    else 
    {
        let idols = await db.any('SELECT * FROM kpopIdol');
        // let idols = await db.oneOrNone('SELECT * FROM kpopIdol WHERE id = $1', req.query.id);
        res.json(idols);
    }
})

app.post('/player', (req, res) => {
    
})

app.patch('/player', (req, res) => {
    
})

app.delete('/player', (req, res) => {
    
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
});





// INSERT INTO kpopIdol (name, groupName, songs)
// VALUES ('Yeonjun', 'TXT', '{Sugar Rush Ride, CROWN, Fairy of Shampoo, Anti-Romantic}')
// RETURNING *;