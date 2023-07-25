// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // Here is the HTML formatting for our mission target div.
  document.getElementById("missionTarget").innerHTML = `

               <h2>Mission Destination</h2>
               <ol>
                   <li>Name: ${name}</li>
                   <li>Diameter: ${diameter}</li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: ${distance}</li>
                   <li>Number of Moons:${moons}</li>
               </ol>
               <img src="${imageUrl}">
`;
}

function validateInput(input) {
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

if(fuelLevel < 10000) { // Error: Fuel level low AND cargo heavy regardless of cargo data
  document.getElementById("faultyItems").style.visibility = "visible";
  document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} ready for launch`;
  document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName} ready for launch`;
  document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
  document.getElementById("cargoStatus").innerHTML //= "Cargo mass too heavy for launch";
  document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
  document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)"; //red
  
} else if (cargoMass > 10000) { // works when fuel is high but cargo is high
  document.getElementById("faultyItems").style.visibility = "visible";
  document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} ready for launch`;
  document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName} ready for launch`;
  document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
  document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
  document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)"; //red

} else { // ready for launch works when fuel is high and cargo is low
  document.getElementById("faultyItems").style.visibility = "visible";
  document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} ready for launch`;
  document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName} ready for launch`;
  document.getElementById("launchStatus").innerHTML = "Shuttle Ready for Launch";
  document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)"; //green

}

}


async function myFetch() { //wait for the promise in the 'fetch' request to resolve before executing any more code.
  let planetsReturned;

  planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json')
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