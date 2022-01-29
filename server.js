// Dependencies
const express = require('express');
const path = require('path');
const db = require('./db/db.json');
const fs = require('fs');

const api = require('./routes/index.js');

// Sets an initial port.
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware for parsing JSON and urlencoded form data
// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);