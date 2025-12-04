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
if (showRosterButton && rosterList) {
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
}
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
if (showSharksRosterButton && sharksRosterList) {
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
}
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
if (showDevilsRosterButton && devilsRosterList) {
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
}
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
if (showPanthersRosterButton && panthersRosterList) {
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
}
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
if (showStarsRosterButton && starsRosterList) {
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
}
// AI-generated code ends here (Dallas Stars)

// AI-generated code starts here (Edmonton Oilers)
// Student prompt: Show the Edmonton Oilers and their roster when a button is clicked

// This is a simple list of Edmonton Oilers players (example, not full)
// You can add or change players if you want!
var oilersPlayers = [
  "Connor McDavid",
  "Leon Draisaitl",
  "Zach Hyman",
  "Evan Bouchard",
  "Ryan Nugent-Hopkins",
  "Stuart Skinner",
];

// Get the button and the roster list from the page for Oilers
var showOilersRosterButton = document.querySelector("#show-oilers-roster");
var oilersRosterList = document.querySelector("#oilers-roster");

// When the Oilers button is clicked...
if (showOilersRosterButton && oilersRosterList) {
  showOilersRosterButton.addEventListener("click", function () {
    // Clear out the list first (in case it's already filled)
    oilersRosterList.innerHTML = "";

    // For each player in the oilersPlayers list...
    for (var i = 0; i < oilersPlayers.length; i++) {
      // Create a new <li> element
      var li = document.createElement("li");
      // Set the text to the player's name
      li.textContent = oilersPlayers[i];
      // Add the <li> to the <ul>
      oilersRosterList.appendChild(li);
    }

    // Show the roster list (it starts hidden)
    oilersRosterList.style.display = "block";
  });
}
// AI-generated code ends here (Edmonton Oilers)

// AI-generated code starts here (Second layer of six teams)
// Student prompt: Add six more teams and show their rosters when buttons are clicked

// Toronto Maple Leafs (example players)
var torontoPlayers = [
  "Auston Matthews",
  "William Nylander",
  "Mitch Marner",
  "John Tavares",
  "Morgan Rielly",
  "Ilya Samsonov",
];

var showTorontoRosterButton = document.querySelector("#show-toronto-roster");
var torontoRosterList = document.querySelector("#toronto-roster");

if (showTorontoRosterButton && torontoRosterList) {
  showTorontoRosterButton.addEventListener("click", function () {
    torontoRosterList.innerHTML = "";
    for (var i = 0; i < torontoPlayers.length; i++) {
      var li = document.createElement("li");
      li.textContent = torontoPlayers[i];
      torontoRosterList.appendChild(li);
    }
    torontoRosterList.style.display = "block";
  });
}

// Montreal Canadiens (example players)
var montrealPlayers = [
  "Cole Caufield",
  "Nick Suzuki",
  "Brendan Gallagher",
  "Alexis Lafreniere",
  "Arber Xhekaj",
  "Jake Allen",
];

var showMontrealRosterButton = document.querySelector("#show-montreal-roster");
var montrealRosterList = document.querySelector("#montreal-roster");

if (showMontrealRosterButton && montrealRosterList) {
  showMontrealRosterButton.addEventListener("click", function () {
    montrealRosterList.innerHTML = "";
    for (var i = 0; i < montrealPlayers.length; i++) {
      var li = document.createElement("li");
      li.textContent = montrealPlayers[i];
      montrealRosterList.appendChild(li);
    }
    montrealRosterList.style.display = "block";
  });
}

// Vancouver Canucks (example players)
var vancouverPlayers = [
  "Elias Pettersson",
  "Quinn Hughes",
  "J.T. Miller",
  "Brock Boeser",
  "Andrei Kuzmenko",
  "Thatcher Demko",
];

var showVancouverRosterButton = document.querySelector(
  "#show-vancouver-roster"
);
var vancouverRosterList = document.querySelector("#vancouver-roster");

if (showVancouverRosterButton && vancouverRosterList) {
  showVancouverRosterButton.addEventListener("click", function () {
    vancouverRosterList.innerHTML = "";
    for (var i = 0; i < vancouverPlayers.length; i++) {
      var li = document.createElement("li");
      li.textContent = vancouverPlayers[i];
      vancouverRosterList.appendChild(li);
    }
    vancouverRosterList.style.display = "block";
  });
}

// Colorado Avalanche (example players)
var avalanchePlayers = [
  "Nathan MacKinnon",
  "Cale Makar",
  "Mikko Rantanen",
  "Artturi Lehkonen",
  "Mikko Niemela",
  "Alexander Georgiev",
];

var showAvalancheRosterButton = document.querySelector(
  "#show-avalanche-roster"
);
var avalancheRosterList = document.querySelector("#avalanche-roster");

if (showAvalancheRosterButton && avalancheRosterList) {
  showAvalancheRosterButton.addEventListener("click", function () {
    avalancheRosterList.innerHTML = "";
    for (var i = 0; i < avalanchePlayers.length; i++) {
      var li = document.createElement("li");
      li.textContent = avalanchePlayers[i];
      avalancheRosterList.appendChild(li);
    }
    avalancheRosterList.style.display = "block";
  });
}

// Tampa Bay Lightning (example players)
var lightningPlayers = [
  "Victor Hedman",
  "Brayden Point",
  "Nikita Kucherov",
  "Steven Stamkos",
  "Andrei Vasilevskiy",
  "Mikhail Sergachev",
];

var showLightningRosterButton = document.querySelector(
  "#show-lightning-roster"
);
var lightningRosterList = document.querySelector("#lightning-roster");

if (showLightningRosterButton && lightningRosterList) {
  showLightningRosterButton.addEventListener("click", function () {
    lightningRosterList.innerHTML = "";
    for (var i = 0; i < lightningPlayers.length; i++) {
      var li = document.createElement("li");
      li.textContent = lightningPlayers[i];
      lightningRosterList.appendChild(li);
    }
    lightningRosterList.style.display = "block";
  });
}

// New York Rangers (example players)
var rangersPlayers = [
  "Artemi Panarin",
  "Mika Zibanejad",
  "Adam Fox",
  "Chris Kreider",
  "Igor Shesterkin",
  "Kappo Kakko",
];

var showRangersRosterButton = document.querySelector("#show-rangers-roster");
var rangersRosterList = document.querySelector("#rangers-roster");

if (showRangersRosterButton && rangersRosterList) {
  showRangersRosterButton.addEventListener("click", function () {
    rangersRosterList.innerHTML = "";
    for (var i = 0; i < rangersPlayers.length; i++) {
      var li = document.createElement("li");
      li.textContent = rangersPlayers[i];
      rangersRosterList.appendChild(li);
    }
    rangersRosterList.style.display = "block";
  });
}

// AI-generated code ends here (Second layer of six teams)
