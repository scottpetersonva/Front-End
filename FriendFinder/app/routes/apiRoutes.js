// Your `apiRoutes.js` file should contain two routes:

// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//------------------------------------------------------------------------
// LOAD DATA
//------------------------------------------------------------------------
var friends = require("../data/friends");

//------------------------------------------------------------------------
// ROUTING
//------------------------------------------------------------------------

module.exports = function(app) {

  //  TODO: A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  // FIXME: WTF?! hah.. what does this witchcraft ('/api/friends') do?
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //  TODO: A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
  app.post("/api/friends", function(req, res) {
    // TODO: Post new survey results

    
    // TODO: Handle Compatibility logic


  });
}