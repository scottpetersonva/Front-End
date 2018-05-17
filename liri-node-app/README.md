# LIRI App
LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and returns data.

## Commands

**`node liri.js my-tweets`** - This will show the last 20 tweets and when they were created in the terminal window.

**`node liri.js spotify [song name here]`** - This will output the following information about the song the user enters in the terminal window. If no song is provided then the program will default to "The Sign" by Ace of Base.

* The song's name
* Artist(s)
* A preview link of the song from Spotify
* The album that the song is from

**`node liri.js movie-this [movie name here]`** - This will output the following information about the movie the user enters to the terminal window. If the user doesn't supply a movie name, the program will default to "Mr. Nobody."

* Title
* Year
* IMDB Rating
* Rotten Tomatoes Rating
* Country
* Language
* Plot
* Top Actors

**`node liri.js do-what-it-says`** - Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

### Project Built With

JavaScript | Node.js | Twitter, Spotify and OMDB APIs