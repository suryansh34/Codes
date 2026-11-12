const express = require('express')
// import express from "express"
const app = express()

const port = 3000

app.get('/',(req,res) => {
    res.send("Hello Beti")
})

app.get('/github',(req,res) => {
    res.send('suryansh34')
})

app.get('/login' , (req,res) => {
    res.send('<h1>please login in this website<h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>Beyond the Noise</h2>')
})

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);    
// })

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);    
})