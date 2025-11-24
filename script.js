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
