require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "khushi-7488",
  "id": 207400298,
  "node_id": "U_kgDODFytag",
  "avatar_url": "https://avatars.githubusercontent.com/u/207400298?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/khushi-7488",
  "html_url": "https://github.com/khushi-7488",
  "followers_url": "https://api.github.com/users/khushi-7488/followers",
  "following_url": "https://api.github.com/users/khushi-7488/following{/other_user}",
  "gists_url": "https://api.github.com/users/khushi-7488/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/khushi-7488/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/khushi-7488/subscriptions",
  "organizations_url": "https://api.github.com/users/khushi-7488/orgs",
  "repos_url": "https://api.github.com/users/khushi-7488/repos",
  "events_url": "https://api.github.com/users/khushi-7488/events{/privacy}",
  "received_events_url": "https://api.github.com/users/khushi-7488/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2025-04-13T04:46:23Z",
  "updated_at": "2025-06-05T10:55:01Z"
}

app.get('/', (req, res) => {
  res.send('<h1>Hello Ayush bhai kaise ho?</h1>')
})

app.get('/login', (req, res) => {
  res.send("khushi")
})

app.get('/github', (req, res) =>{
  res.send(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})