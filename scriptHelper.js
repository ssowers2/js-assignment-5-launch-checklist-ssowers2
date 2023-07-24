// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(input) { //what is the point of this again if we are still validating it below?
    if (input === "") { 
         return "Empty";
       } else if (isNaN(input)) {
         return "Not a Number";
       } else {
         return "Is a Number";
       }
return input    

}

function formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass) {

if(fuelLevel < 10000) { // Fuel level low 
  document.getElementById("faultyItems").style.visibility = "visible";
  document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch`;
  document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName} is ready for launch`;
  document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
  document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
  document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)"; //red
  
} else if (cargoMass > 10000) { // Cargo mass large if this is if will be ready for launch
  document.getElementById("faultyItems").style.visibility = "visible";
  document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch`;
  document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName} is ready for launch`;
  document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
  document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
  document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)"; //red

    
} else if (cargoMass > 10000) { // Cargo mass large if this is if will be ready for launch
  document.getElementById("faultyItems").style.visibility = "visible";
  document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch`;
  document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName} is ready for launch`;
  document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
  document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
  document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)"; //red


} else { //ready to lauch
  document.getElementById("faultyItems").style.visibility = "visible";
  document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch`;
  document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName} is ready for launch`;
  document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
  document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)"; //green

}

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;