const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  return res.json([
    { id: 1, name: 'John' },
    { id: 2, name: 'Martha' },
    { id: 3, name: 'Simon' },
  ]);
});

app.get('/test/', async (req, res) => {
  return res.send('Hello from server');
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${process.env.API_LOCAL_PORT}`);
});
