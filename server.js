// Dependencies
const express = require('express');

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;

// Tells node that we are creating an "express" server
const app = express();

// Middleware for parsing JSON and urlencoded form data
// Sets up the Express app to handle data parsing
// express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. 
// This method is called as a middleware in your application using the code: app.use(express.urlencoded());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//Listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);