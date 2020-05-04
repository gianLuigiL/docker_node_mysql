require('dotenv').config({ path: `./env.${process.env.ENV}.env` })
const express = require('express');
const app = express();

app.listen(process.env.PORT, () => console.log(`App is listening on port ${process.env.PORT}`))
app.get("/", (req, res) => {
    res.send("Hello from " + process.env.ENV)   
})

app.get("/test", (req, res) => {
    res.send("Hello from " + process.env.ENV)   
})


