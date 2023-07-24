// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");//stops the form from submitting the data and refreshing the page.

    form.addEventListener('submit', function(event) { 
    event.preventDefault(); //Stops form from submitting the data and refreshing the page.

    let pilotInput = document.querySelector("input[name=pilotName]"); //represents data field
    let pilotName = pilotInput.value; //represents field data entered

    let copilotInput = document.querySelector("input[name=copilotName]");
    let copilotName = copilotInput.value;

    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelInput.value);

    let cargoInput = document.querySelector("input[name=cargoMass]");
    let cargoMass = Number(cargoInput.value);
   
    if (pilotName === "" || copilotName === "") {
        alert("All fields are required!"); //Alerts if none OR if pilot fields are not completed

    } else if (isNaN(fuelLevel) || isNaN(cargoMass)) {
        alert("Make sure to enter valid information for each field!"); //Alerts if FL/CM not a number
    
    } else if (pilotName !== isNaN || copilotName !== isNaN) {
        alert("Make sure to enter valid information for each field!"); //Alerts if pilots are numbers

    } //Error: "Make sure to enter valid information for each field!" alerts when FL & CM are empty
        formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass); 
    
    }); 

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
   })

});