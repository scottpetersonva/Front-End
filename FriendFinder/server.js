var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path"); //May put in htmlRoutes.js

//------------------------------------------------------------------------
// EXPRESS CONFIGURATION
//------------------------------------------------------------------------

// Create "express" server
var app = express();
// Sets initial port.
var PORT = process.env.PORT || 2000;

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//------------------------------------------------------------------------
// ROUTER
//------------------------------------------------------------------------

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});