// Write your JavaScript code here!

window.addEventListener("load", function() {
    let faultyItemsList = document.getElementById("faultyItems"); 
    faultyItemsList.style.visibility = "hidden";

    let form = document.querySelector("form");

    form.addEventListener('submit', function(event) { //sending post request and/or refresh page, but preventDefault stops this
    event.preventDefault(); //Stops form from submitting data and refreshing the page.

    let pilotInput = document.querySelector("input[name=pilotName]"); //represents data field
    let pilotName = pilotInput.value; //represents data entered into field

    let copilotInput = document.querySelector("input[name=copilotName]");
    let copilotName = copilotInput.value;

    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelInput.value);

    let cargoInput = document.querySelector("input[name=cargoMass]");
    let cargoMass = Number(cargoInput.value);
    
    formSubmission(document, faultyItemsList, pilotName, copilotName,fuelLevel, cargoMass);
   
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch()

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
       let chosenPlanet = pickPlanet(listedPlanets) 
       addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image)
   })

});

