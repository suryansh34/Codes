// const express = require('express'); //commonjs
import express from 'express' //modulejs 

const app = express();

// app.get('/', (req,res) => {
//     res.send('Sever is ready');
// });

// get a list of 5 jokes
app.get('/api/jokes' , (req,res) => {
    const jokes = [
  {
    id: 1,
    category: "Programming",
    setup: "Why do programmers prefer dark mode?",
    punchline: "Because light attracts bugs."
  },
  {
    id: 2,
    category: "Programming",
    setup: "How many programmers does it take to change a light bulb?",
    punchline: "None, that's a hardware problem."
  },
  {
    id: 3,
    category: "General",
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything."
  },
  {
    id: 4,
    category: "Dad Joke",
    setup: "I told my wife she was drawing her eyebrows too high.",
    punchline: "She looked surprised."
  },
  {
    id: 5,
    category: "Tech",
    setup: "Why was the JavaScript developer sad?",
    punchline: "Because he didn't Node how to Express himself."
  }
];
res.send(jokes);
})

const port = process.env.PORT || 3000;


app.listen(port,() => {
    console.log(`Serve at http://localhost:${port}`)
})