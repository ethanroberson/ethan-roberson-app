const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let posts = []; // Array to store posts

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const { text } = req.body;
  const newPost = {
    id: Date.now(), // Unique ID for the post
    text: text,
  };
  posts.push(newPost);
  res.json(newPost);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
