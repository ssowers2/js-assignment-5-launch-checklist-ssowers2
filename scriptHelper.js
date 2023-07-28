// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // Here is the HTML formatting for our mission target div.
  document.getElementById("missionTarget").innerHTML = `
.
               <h2>Mission Destination</h2>
               <ol>
                   <li>Name: ${name}</li>
                   <li>Diameter: ${diameter}</li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: ${distance}</li>
                   <li>Number of Moons: ${moons}</li>
               </ol>
               <img src="${imageUrl}"> 
`;
}

function validateInput(input) {
    if (input === "" || input === Number('')) { 
         return "Empty";
       } else if (isNaN(input)) {
         return "Not a Number";
       } else {
         return "Is a Number";
       }  
}


function formSubmission(document, faultyItemsList, pilotName, copilotName, fuelLevel, cargoMass) {

  if (validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {    
    alert("All fields are required!"); 
  
} else if (validateInput(pilotName) === "Is a Number" || validateInput(copilotName) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
    alert("Make sure to enter valid information for each field!"); 

} else {

//created variables to store elements
let faultyItemsVisible = document.getElementById("faultyItems");
let pilotReady = document.getElementById("pilotStatus");
let copilotReady = document.getElementById("copilotStatus");
let fuelLow = document.getElementById("fuelStatus");
let fuelHigh = document.getElementById("fuelStatus");
let cargoHeavy = document.getElementById("cargoStatus");
let cargoLow = document.getElementById("cargoStatus");
let shuttleNotReady = document.getElementById("launchStatus");
let statusRed = document.getElementById("launchStatus");
let shuttleReady = document.getElementById("launchStatus");
let statusGreen = document.getElementById("launchStatus");

if(fuelLevel < 10000 && cargoMass > 10000) { // fuel low, cargo high
shuttleNotReady.innerHTML = "Shuttle Not Ready for Launch";
faultyItemsVisible.style.visibility = "visible";
pilotReady.innerHTML = `Pilot ${pilotName} ready for launch`;
copilotReady.innerHTML = `Co-pilot ${copilotName} ready for launch`;
fuelLow.innerHTML = "Fuel level too low for launch";
cargoHeavy.innerHTML = "Cargo mass too heavy for launch";
statusRed.style.color = "rgb(199, 37, 78)";

} else if (fuelLevel < 10000 && cargoMass < 10000){ //fuel low, cargo low
shuttleNotReady.innerHTML = "Shuttle Not Ready for Launch";
faultyItemsVisible.style.visibility = "visible";
pilotReady.innerHTML = `Pilot ${pilotName} ready for launch`;
copilotReady.innerHTML = `Co-pilot ${copilotName} ready for launch`;
fuelLow.innerHTML = "Fuel level too low for launch";
cargoLow.innerHTML = "Cargo mass low enough for launch";
statusRed.style.color = "rgb(199, 37, 78)";

} else if (cargoMass > 10000) { // fuel high, cargo high
shuttleNotReady.innerHTML = "Shuttle Not Ready for Launch";
faultyItemsVisible.style.visibility = "visible";
pilotReady.innerHTML = `Pilot ${pilotName} ready for launch`;
copilotReady.innerHTML = `Co-pilot ${copilotName} ready for launch`;
fuelHigh.innerHTML =  "Fuel level high enough for launch";
cargoHeavy.innerHTML = "Cargo mass too heavy for launch";
statusRed.style.color = "rgb(199, 37, 78)"; 

} else { // fuel high, cargo low
shuttleReady.innerHTML = "Shuttle Ready for Launch";
faultyItemsVisible.style.visibility = "visible";
pilotReady.innerHTML = `Pilot ${pilotName} ready for launch`;
copilotReady.innerHTML = `Co-pilot ${copilotName} ready for launch`;
fuelHigh.innerHTML =  "Fuel level high enough for launch";
cargoLow.innerHTML = "Cargo mass low enough for launch";
statusGreen.style.color = "rgb(65, 159, 106)"; 
}

}

}

async function myFetch() { //Waiting for data to come back from the URl but can't use it until turn response into an JSON (read more on JSON) object
  let planetsReturned;
  planetsReturned = fetch('https://handlers.education.launchcode.org/static/planets.json')
  .then( response => response.json());
return planetsReturned;
}

function pickPlanet(planets) { //picks a random planet from an array by generating a random index#
  let randomIndex = Math.floor(Math.random() * planets.length);
  return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;