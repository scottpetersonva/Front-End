var targetNumber = Math.floor(Math.random() * 30) + 30;
  
  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  var wins = 0;
  var losses = 0;
  var wlText = ["You win!", "You lose!"]
  var numberOptions = [Math.floor(Math.random() * 10) + 1];
  var numberOptions2 = [Math.floor(Math.random() * 10) + 1];
  var numberOptions3 = [Math.floor(Math.random() * 10) + 1];
  var numberOptions4 = [Math.floor(Math.random() * 10) + 1];

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
 
  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");
    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");
    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "assets/images/triangle.png");
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
    
}

  for (var i = 0; i < numberOptions2.length; i++) {
    var imageCrystal2 = $("<img>");
    imageCrystal2.addClass("crystal-image");
    imageCrystal2.attr("src", "assets/images/circle.png");
    imageCrystal2.attr("data-crystalvalue", numberOptions2[i]);
    $("#crystals").append(imageCrystal2);
    
}

  for (var i = 0; i < numberOptions3.length; i++) {
    var imageCrystal3 = $("<img>");
    imageCrystal3.addClass("crystal-image");
    imageCrystal3.attr("src", "assets/images/square.png");
    imageCrystal3.attr("data-crystalvalue", numberOptions3[i]);
    $("#crystals").append(imageCrystal3);

}
 
  for (var i = 0; i < numberOptions4.length; i++) {
    var imageCrystal4 = $("<img>");
    imageCrystal4.addClass("crystal-image");
    imageCrystal4.attr("src", "assets/images/star.png");
    imageCrystal4.attr("data-crystalvalue", numberOptions4[i]);
    $("#crystals").append(imageCrystal4);
    
}

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.

    if (counter === targetNumber) {
      wins++;
      counter = 0;
      targetNumber = Math.floor(Math.random() * 30) + 30;
      numberOptions = [Math.floor(Math.random() * 10) + 1];
      numberOptions2 = [Math.floor(Math.random() * 10) + 1];
      numberOptions3 = [Math.floor(Math.random() * 10) + 1];
      numberOptions4 = [Math.floor(Math.random() * 10) + 1];
      imageCrystal.attr("data-crystalvalue", numberOptions);
      $("#crystals").append(imageCrystal);
      imageCrystal2.attr("data-crystalvalue", numberOptions2);
      $("#crystals").append(imageCrystal2);
      imageCrystal3.attr("data-crystalvalue", numberOptions3);
      $("#crystals").append(imageCrystal3);
      imageCrystal4.attr("data-crystalvalue", numberOptions4);
      $("#crystals").append(imageCrystal4);
      $("#wlText").text(wlText[0]);
      $("#number-to-guess").text(targetNumber);
      
    }

    if (counter >= targetNumber) {
      losses++;
      counter = 0
      targetNumber = Math.floor(Math.random() * 30) + 30;
      numberOptions = [Math.floor(Math.random() * 10) + 1];
      numberOptions2 = [Math.floor(Math.random() * 10) + 1];
      numberOptions3 = [Math.floor(Math.random() * 10) + 1];
      numberOptions4 = [Math.floor(Math.random() * 10) + 1];
      imageCrystal.attr("data-crystalvalue", numberOptions);
      $("#crystals").append(imageCrystal);
      imageCrystal2.attr("data-crystalvalue", numberOptions2);
      $("#crystals").append(imageCrystal2);
      imageCrystal3.attr("data-crystalvalue", numberOptions3);
      $("#crystals").append(imageCrystal3);
      imageCrystal4.attr("data-crystalvalue", numberOptions4);
      $("#crystals").append(imageCrystal4);
      $("#wlText").text(wlText[1]);
      $("#number-to-guess").text(targetNumber);
      
    }
    
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#counter").text(counter);

    
  });