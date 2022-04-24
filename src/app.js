const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const v1 = require('./routes/mainRoute')

app.use('/v1', v1)

app.use((req, res, next) => {
    res.status(404).send({"error":"Not Found"});
    next();
})

module.exports = app;
 