console.log("Hello, Interactive Graphic Design!");
// This is the main JavaScript file for the Interactive Graphic Design project.

// AI-generated code starts here
// Student prompt: Show the Boston Bruins and their roster when a button is clicked

// This is a simple list of Boston Bruins players (2023-24 example, not full)
// You can add more players if you want!
var bruinsPlayers = [
  "Brad Marchand",
  "David Pastrnak",
  "Charlie McAvoy",
  "Patrice Bergeron",
  "Hampus Lindholm",
  "Jeremy Swayman",
];

// Get the button and the roster list from the page
var showRosterButton = document.querySelector("#show-bruins-roster");
var rosterList = document.querySelector("#bruins-roster");

// When the button is clicked...
showRosterButton.addEventListener("click", function () {
  // Clear out the list first (in case it's already filled)
  rosterList.innerHTML = "";

  // For each player in the bruinsPlayers list...
  for (var i = 0; i < bruinsPlayers.length; i++) {
    // Create a new <li> element
    var li = document.createElement("li");
    // Set the text to the player's name
    li.textContent = bruinsPlayers[i];
    // Add the <li> to the <ul>
    rosterList.appendChild(li);
  }

  // Show the roster list (it starts hidden)
  rosterList.style.display = "block";
});
// AI-generated code ends here

// AI-generated code starts here (San Jose Sharks)
// Student prompt: Show the San Jose Sharks and their roster when a button is clicked

// This is a simple list of San Jose Sharks players (2023-24 example, not full)
// You can add more players if you want!
var sharksPlayers = [
  "Logan Couture",
  "Tomas Hertl",
  "Mario Ferraro",
  "Mikael Granlund",
  "Mackenzie Blackwood",
  "William Eklund",
];

// Get the button and the roster list from the page for Sharks
var showSharksRosterButton = document.querySelector("#show-sharks-roster");
var sharksRosterList = document.querySelector("#sharks-roster");

// When the Sharks button is clicked...
showSharksRosterButton.addEventListener("click", function () {
  // Clear out the list first (in case it's already filled)
  sharksRosterList.innerHTML = "";

  // For each player in the sharksPlayers list...
  for (var i = 0; i < sharksPlayers.length; i++) {
    // Create a new <li> element
    var li = document.createElement("li");
    // Set the text to the player's name
    li.textContent = sharksPlayers[i];
    // Add the <li> to the <ul>
    sharksRosterList.appendChild(li);
  }

  // Show the roster list (it starts hidden)
  sharksRosterList.style.display = "block";
});
// AI-generated code ends here (San Jose Sharks)

// AI-generated code starts here (New Jersey Devils)
// Student prompt: Show the New Jersey Devils and their roster when a button is clicked

// This is a simple list of New Jersey Devils players (2023-24 example, not full)
// You can add more players if you want!
var devilsPlayers = [
  "Jack Hughes",
  "Nico Hischier",
  "Jesper Bratt",
  "Dougie Hamilton",
  "Ondrej Palat",
  "Vitek Vanecek",
];

// Get the button and the roster list from the page for Devils
var showDevilsRosterButton = document.querySelector("#show-devils-roster");
var devilsRosterList = document.querySelector("#devils-roster");

// When the Devils button is clicked...
showDevilsRosterButton.addEventListener("click", function () {
  // Clear out the list first (in case it's already filled)
  devilsRosterList.innerHTML = "";

  // For each player in the devilsPlayers list...
  for (var i = 0; i < devilsPlayers.length; i++) {
    // Create a new <li> element
    var li = document.createElement("li");
    // Set the text to the player's name
    li.textContent = devilsPlayers[i];
    // Add the <li> to the <ul>
    devilsRosterList.appendChild(li);
  }

  // Show the roster list (it starts hidden)
  devilsRosterList.style.display = "block";
});
// AI-generated code ends here (New Jersey Devils)

// AI-generated code starts here (Florida Panthers)
// Student prompt: Show the Florida Panthers and their roster when a button is clicked

// This is a simple list of Florida Panthers players (2023-24 example, not full)
// You can add more players if you want!
var panthersPlayers = [
  "Aleksander Barkov",
  "Matthew Tkachuk",
  "Sergei Bobrovsky",
  "Sam Reinhart",
  "Carter Verhaeghe",
  "Aaron Ekblad",
];

// Get the button and the roster list from the page for Panthers
var showPanthersRosterButton = document.querySelector("#show-panthers-roster");
var panthersRosterList = document.querySelector("#panthers-roster");

// When the Panthers button is clicked...
showPanthersRosterButton.addEventListener("click", function () {
  // Clear out the list first (in case it's already filled)
  panthersRosterList.innerHTML = "";

  // For each player in the panthersPlayers list...
  for (var i = 0; i < panthersPlayers.length; i++) {
    // Create a new <li> element
    var li = document.createElement("li");
    // Set the text to the player's name
    li.textContent = panthersPlayers[i];
    // Add the <li> to the <ul>
    panthersRosterList.appendChild(li);
  }

  // Show the roster list (it starts hidden)
  panthersRosterList.style.display = "block";
});
// AI-generated code ends here (Florida Panthers)

// AI-generated code starts here (Dallas Stars)
// Student prompt: Show the Dallas Stars and their roster when a button is clicked

// This is a simple list of Dallas Stars players (example, not full)
// You can add more players if you want!
var starsPlayers = [
  "Jason Robertson",
  "Jamie Benn",
  "Roope Hintz",
  "Miro Heiskanen",
  "Jake Oettinger",
  "Tyler Seguin",
];

// Get the button and the roster list from the page for Stars
var showStarsRosterButton = document.querySelector("#show-stars-roster");
var starsRosterList = document.querySelector("#stars-roster");

// When the Stars button is clicked...
showStarsRosterButton.addEventListener("click", function () {
  // Clear out the list first (in case it's already filled)
  starsRosterList.innerHTML = "";

  // For each player in the starsPlayers list...
  for (var i = 0; i < starsPlayers.length; i++) {
    // Create a new <li> element
    var li = document.createElement("li");
    // Set the text to the player's name
    li.textContent = starsPlayers[i];
    // Add the <li> to the <ul>
    starsRosterList.appendChild(li);
  }

  // Show the roster list (it starts hidden)
  starsRosterList.style.display = "block";
});
// AI-generated code ends here (Dallas Stars)
