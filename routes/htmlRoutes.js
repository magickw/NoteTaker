//Dependencies
// We need to include the path package to get the correct file path for our html
const path = require('path');

// Routing
module.exports = (app) => {
  // HTML GET Requests
  app.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // If no matching route is found default to home
  // GET * should return the index.html file.
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
  });

//   GET Route for homepage
  app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '/public/index.html'));
  });
};
