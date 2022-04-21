const express = require('express');
const axios = require('axios');
const app = express();

app.get("/", (req, res)=>{
    res.send("Hola Mundo")
});

const PORT = process.env.PORT ? process.env.PORT : 3000;
app.listen(PORT, () => console.log(`Server runing in port ${PORT}`))
