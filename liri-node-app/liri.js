// Linking files with API Keys

require("dotenv").config();
var keys = require("./keys.js");

// console.log(keys)

// Require code to call APIs

var Twitter = require("twitter");
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var terminalEntry = process.argv[2];

// TWITTER TERMINAL ENTRY KEY PHRASE

if (terminalEntry === "my-tweets") {

    var params = {screen_name: '@d3v_d3v_d3v'};

// TWITTER API CALL

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (i = 0; i < tweets.length; i++) { 
                console.log(JSON.stringify(tweets[i].text, null, 2));
            }
        }
    });

}

// SPOTIFY SETTING TERMINAL ENTRY KEY PHRASE

if (terminalEntry === "spotify") {   
    
    var songEntry = process.argv;
    var songName = "";

    for (var i = 3; i < songEntry.length; i++) {
        if (i > 3 && i < songEntry.length) {
            songName = songName + "+" + songEntry[i];
        }

    else {
        songName += songEntry[i];
    }
}

// SPOTIFY API CALL

if (songEntry.length > 3) {

  spotify.search({ type: 'track', query: songName, limit: 3 }, function(err, data)
  
  {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
    // console.log(JSON.stringify(data, null, 2)); 
    console.log(JSON.stringify("Track Name: " + data.tracks.items[0].name, null, 2));
    console.log(JSON.stringify("Artist: " + data.tracks.items[0].album.artists[0].name, null, 2)); 
    console.log(JSON.stringify("Album Name: " + data.tracks.items[0].album.name, null, 2));
    console.log(JSON.stringify("Preview URL: " + data.tracks.items[0].preview_url, null, 2));
  });
}

//  RETURNS "THE SIGN" IF USER MAKES NO ENTRY

else {
    spotify.search({ type: 'track', query: "The Sign Ace of Base", limit: 1 }, function(err, data)
  
    {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
     
    //   console.log(JSON.stringify(data, null, 2)); 
      console.log(JSON.stringify("Track Name: " + data.tracks.items[0].name, null, 2));
      console.log(JSON.stringify("Artist: " + data.tracks.items[0].album.artists[0].name, null, 2)); 
      console.log(JSON.stringify("Album Name: " + data.tracks.items[0].album.name, null, 2));
      console.log(JSON.stringify("Preview URL: " + data.tracks.items[0].preview_url, null, 2));
      
    });
}

}

// OMDB SETTING TERMINAL ENTRY KEY PHRASE

if (terminalEntry === "movie-this") {
    
    var nodeArgs = process.argv;
    var movieName = "";
    var mrNobody = "Mr. Nobody"

    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 3 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
        }

        else {
        movieName += nodeArgs[i];
        }
    }

    var queryUrl

    if (nodeArgs.length > 3) {
        queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=7138ed1d";
    }

    else {
        queryUrl = "http://www.omdbapi.com/?t=" + mrNobody + "&y=&plot=short&apikey=7138ed1d"
    }

// OMDB API CALL

    request(queryUrl, function(error, response, body) {

        if (!error && response.statusCode === 200) {
    
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
    
        }
    });
}

var backstreet = []

if (terminalEntry === "do-what-it-says") {

    

    fs.readFile("random.txt", "utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return console.log(error);
        }


        data = data.split(",")

        backstreet.push(data)
        
        {
            spotify.search({ type: 'track', query: backstreet[0][1], limit: 1 }, function(err, data)
          
            {
              if (err) {
                return console.log('Error occurred: ' + err);
              }
             
            //   console.log(JSON.stringify(data, null, 2)); 
              console.log(JSON.stringify("Track Name: " + data.tracks.items[0].name, null, 2));
              console.log(JSON.stringify("Artist: " + data.tracks.items[0].album.artists[0].name, null, 2)); 
              console.log(JSON.stringify("Album Name: " + data.tracks.items[0].album.name, null, 2));
              console.log(JSON.stringify("Preview URL: " + data.tracks.items[0].preview_url, null, 2));

              
            });
        }
      
      });



}