require('dotenv').config();
const express = require('express')
// import express from "express"
const app = express()

const port = 3000

const githubData = {
  "login": "suryansh34",
  "id": 236226238,
  "node_id": "U_kgDODhSGvg",
  "avatar_url": "https://avatars.githubusercontent.com/u/236226238?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/suryansh34",
  "html_url": "https://github.com/suryansh34",
  "followers_url": "https://api.github.com/users/suryansh34/followers",
  "following_url": "https://api.github.com/users/suryansh34/following{/other_user}",
  "gists_url": "https://api.github.com/users/suryansh34/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/suryansh34/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/suryansh34/subscriptions",
  "organizations_url": "https://api.github.com/users/suryansh34/orgs",
  "repos_url": "https://api.github.com/users/suryansh34/repos",
  "events_url": "https://api.github.com/users/suryansh34/events{/privacy}",
  "received_events_url": "https://api.github.com/users/suryansh34/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Suryansh",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 2,
  "following": 8,
  "created_at": "2025-10-05T15:39:47Z",
  "updated_at": "2026-11-12T03:14:08Z"
}

app.get('/',(req,res) => {
    res.send("Hello Beti")
})

// app.get('/github',(req,res) => {
//     res.send('suryansh34')
// })

app.get('/login' , (req,res) => {
    res.send('<h1>please login in this website<h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>Beyond the Noise</h2>')
})

app.get('/github', (req,res) => {
    res.json(githubData)
})

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);    
// })

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);    
})