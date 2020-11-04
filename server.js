const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT || 1990;

app.listen(port, () => {
  console.log(`Server is listening to http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(path.join(__dirname, 'client')));
