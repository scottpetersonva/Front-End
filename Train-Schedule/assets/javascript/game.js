$( document ).ready(function(){
  $('.parallax').parallax();
  });

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCUSGXCwd-PlT_gG-3YefBT1mPHovT8CKI",
  authDomain: "train-schedule-d2a1e.firebaseapp.com",
  databaseURL: "https://train-schedule-d2a1e.firebaseio.com",
  projectId: "train-schedule-d2a1e",
  storageBucket: "train-schedule-d2a1e.appspot.com",
  messagingSenderId: "1060288508028"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#update-info").on("click", function(){

	// Grabs field
	var trainName = $("#train-name").val().trim();
	var destination = $("#destination").val().trim();
  var firstTrainTime = moment($("#first-train-time").val().trim(), "HH:mm").format("X");
  var firstTrainTimePretty = $("#first-train-time").val().trim();
	var frequency = $("#frequency").val().trim();


	// pushes user entry to firebase
	database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrainTime: firstTrainTime,
    firstTrainTimePretty: firstTrainTimePretty,
    frequency: frequency,
  })

	// log user input to the console
	console.log("New Train Name: " + trainName);
  console.log("New Destination: " + destination); 
  console.log("New First Train Time: " + firstTrainTimePretty);
	console.log("Current Time: " + moment().format("hh:mm A"));
  console.log("New Frequency (min): " + frequency);
  console.log("------------------------")

	// notification of new train
	$('.modal').modal();

	// Clear fields
	$("#train-name").val("");
	$("#destination").val("");
	$("#first-train-time").val("");
	$("#frequency").val("");

});


// 4. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(snapshot){

  console.log(snapshot.val());

	// Store everything into a variable.
	var trainName = snapshot.val().trainName;
	var destination = snapshot.val().destination;
	var frequency = snapshot.val().frequency;
	var firstTrainTime = snapshot.val().firstTrainTime;
	var firstTrainTimePretty = snapshot.val().firstTrainTimePretty;

	// Calculate the minutes until arrival using hardcore math
	// To calculate the minutes till arrival, take the current time in unix subtract the FirstTrain time and find the modulus between the difference and the frequency  
	// var differenceTimes = moment().diff(moment.unix(firstTrainTime), "minutes");
	var remainder = moment().diff(moment.unix(firstTrainTime), "minutes") % frequency;
	var minutesAway = frequency - remainder;

	// calculates arrival time - difference between current time and minutes away
  var nextArrival = moment().add(minutesAway, "m").format("hh:mm A"); 

  // logging data returned from firebase  
  console.log("First Train Time: " + firstTrainTimePretty);
  console.log("Current Time: " + moment().format("hh:mm A"));
	console.log("Minutes Away: " + minutesAway);
  console.log("Next Arrival: " + nextArrival);
  console.log("Frequency: " + frequency);
  console.log("----------------------")

	// Add each train's data into the table 
	$("#table-body").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>");

});