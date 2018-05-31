// Materialize jQuery
// $( document ).ready(function(){
//   $('.collapsible').collapsible();
//   $('.slider').slider();
//   $('.modal').modal();
//   $('.button-collapse').sideNav({
//         closeOnClick: true
//       }
//     );
//   });

// var APIkey = "Q46CLvm1cKcXkLRLD5PdUPYeaSIIi3sW";

var sports = ["soccer", "football", "hockey", "baseball", "tennis", "golf", "cycling"];

function displaySportsInfo() {


$("#sports-view").empty();
var sport = $(this).attr("data-name");

var xhr = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=Q46CLvm1cKcXkLRLD5PdUPYeaSIIi3sW&limit=10";
// xhr.done(function(data)

// { console.log("success got data", data); });

// Perfoming an AJAX GET request to our queryURL
$.ajax({
    url: xhr,
    method: "GET"
  }).then(function(response) {
    // Storing an array of results in the results variable
    var results = response.data;

    // Looping over every result item
    for (var i = 0; i < results.length; i++) {

      // Only taking action if the photo has an appropriate rating

        // Creating a div with the class "item"
        var gifDiv = $("<div class='sports-view col s4 center-align'>");

        // Storing the result item's rating
        var rating = results[i].rating;

        // Creating a paragraph tag with the result item's rating
        var p = $("<p class='blue-grey-text'>").text("Rating: " + rating);

        // setting animated variable
        var animated = response.data[i].images.fixed_height.url;

        // setting still variable
        var still = response.data[i].images.fixed_height_still.url;
      
        // Creating an image tag
        var sportsImage = $("<img>");

        // adding attributes to gifs

        sportsImage.attr("src", still);
        sportsImage.attr("data-still", still);
        sportsImage.attr("data-animated", animated);
        sportsImage.attr("data-state", "still");
        sportsImage.addClass("searchImage");

        // Giving the image tag an src attribute of a proprty pulled off the
        // result item
        sportsImage.attr("src", results[i].images.fixed_height_still.url);

        // Appending the paragraph and sportsImage we created to the "gifDiv" div we created
        gifDiv.append(p);
        gifDiv.append(sportsImage);

        

        // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
        $("#sports-view").append(gifDiv);


    }
  });

}

// Function for displaying movie data
function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#button-view").empty();

    // Looping through the array of sports
    for (var i = 0; i < sports.length; i++) {
    // Then dynamicaly generating buttons for each movie in the array.
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var a = $("<button class='btn blue-grey'>");
    // Adding a class
    a.addClass("sport-btn")
    // Adding a data-attribute with a value of the sport at index i
    a.attr("data-name", sports[i]);
    // Providing the button's text with a value of the sport at index i
    a.text(sports[i]);
    // Adding the button to the HTML
    $("#button-view").append(a);
    }
}

// This function handles events where one button is clicked
$("#add-sport").on("click", function (event) {
  // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    
    event.preventDefault();

    // This line will grab the text from the input box
    var sport = $("#sport-input").val().trim();

    // The sport from the textbox is then added to our array
    sports.push(sport);


    // calling renderButtons which handles the processing of our sports array
    renderButtons();
    
});

$(document).on("click", ".searchImage", function(){
  var state = $(this).attr("data-state");
  if (state == "still"){
    $(this).attr("src", $(this).attr("data-animated"));
    $(this).attr("data-state", "animated");
  } else {
    $(this).attr("src", $(this).attr("data-still"))
    $(this).attr("data-state", "still");
  }
})

  // Function for displaying the sport info
      // We're adding a click event listener to all elements with the class "sport"
      // We're adding the event listener to the document because it will work for dynamically generated elements
      // $(".sport").on("click") will only add listeners to elements that are on the page at that time

      $(document).on("click", ".sport-btn", displaySportsInfo);


      

renderButtons();