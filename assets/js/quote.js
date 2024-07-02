"use strict";
////////////////////////////////////////////////////////////////
// VARIABLES
////////////////////////////////////////////////////////////////

// Set the DOM elements variables for divisions of steps 1 to 4
const DIV_STEP_1 = document.getElementById("step-1");
const DIV_STEP_2 = document.getElementById("step-2");
const DIV_STEP_3 = document.getElementById("step-3");
const DIV_STEP_4 = document.getElementById("step-4");

// Set the DOM element variable for building type dropdown of step 1
const SELECT_BUILDING_TYPE = document.getElementById("building-type");

// Set the DOM element variable for the group of divisions of step 2 inputs
const DIV_NUMBER_OF_APARTMENT = document.getElementById("div-number-of-apartments");
const DIV_MAXIMUM_OCCUPANCY = document.getElementById("div-maximum-occupancy");
const DIV_NUMBER_OF_FLOORS = document.getElementById("div-number-of-floors");
const DIV_NUMBER_OF_ELEVATORS = document.getElementById("div-number-of-elevators");
const DIV_AMOUNT_ELEVATORS_NEEDED = document.getElementById("div-amount-elevators-needed");

// Set the DOM element variable for inputs of step 2
const INPUT_NUMBER_OF_APARTMENT = DIV_NUMBER_OF_APARTMENT.querySelector('input');
const INPUT_NUMBER_OF_FLOORS = DIV_NUMBER_OF_FLOORS.querySelector('input');
const INPUT_MAXIMUM_OCCUPANCY = DIV_MAXIMUM_OCCUPANCY.querySelector('input');
const INPUT_NUMBER_OF_ELEVATORS = DIV_NUMBER_OF_ELEVATORS.querySelector('input');
const INPUT_AMOUNT_ELEVATORS_NEEDED = DIV_AMOUNT_ELEVATORS_NEEDED.querySelector('input');

// Set the DOM element variable for group of radio buttons of step 3
const RADIO_BUTTONS_PRODUCT_LINE = document.getElementById("radio-buttons-product-line");

// Set the DOM element variable for radio buttons of step 3
const RADIO_BUTTON_STANDARD = document.getElementById("radio-button-standard");
const RADIO_BUTTON_PREMIUM = document.getElementById("radio-button-premium");
const RADIO_BUTTON_EXCELIUM = document.getElementById("radio-button-excelium");

// Set the DOM element variable for read-only inputs of step 4
const INPUT_ELEVATOR_UNIT_PRICE = document.getElementById("elevator-unit-price");
const INPUT_ELEVATOR_TOTAL_PRICE = document.getElementById("elevator-total-price");
const INPUT_INSTALLATION_FEES = document.getElementById("installation-fees");
const INPUT_TOTAL_COST = document.getElementById("total-cost");

// Set the object variable for elevator UNIT_PRICES
const UNIT_PRICES = {standard: 8000, premium: 12000, excelium: 15000
};

// Set the object variable for elevator INSTALLATION_PERCENT_FEES
const INSTALLATION_PERCENT_FEES = {standard: 0.10, premium: 0.15, excelium: 0.20
};

////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////

// Function to hides steps 2 to 4 of the quote form
function hideSteps() {document.getElementById("step-2", "step-3", "step-4").style.display = "none";
    
}

// Function to shows steps 2 to 4 of the quote form
function showSteps() {document.getElementById("step-2", "step-3", "step-4").style.display = "block";
    
}

// Function to resets all values and radio buttons
function resetValues() {
    // Input values
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"], input[type="number"], input[type="date"], textarea');
    inputs.forEach(input => {
        input.value = '';
    });
    // Radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.checked = false;
    });
}

// Function to shows/hides fields depending on the building type
function showHideFieldOnBuildingType() {
    // Call the hide steps function
    hideSteps(); 
    // Call the reset values function
    resetValues(); 
    
    if (SELECT_BUILDING_TYPE.value !== '---Select---') {
        // Call the show steps function
        showSteps();

        // Set variables depending on the building type
        const displayResidential = SELECT_BUILDING_TYPE.value === "Residential";
        const displayCommercial = SELECT_BUILDING_TYPE.value === "Commercial";
        const displayIndustrial = SELECT_BUILDING_TYPE.value === "Industrial";

        // Display fields depending on the building type
        DIV_NUMBER_OF_APARTMENT.style.display = displayResidential ? '' : 'none';
        DIV_NUMBER_OF_FLOORS.style.display = displayCommercial || displayResidential ? '' : 'none';
        DIV_MAXIMUM_OCCUPANCY.style.display = displayCommercial ? '' : 'none';
        DIV_NUMBER_OF_ELEVATORS.style.display = displayIndustrial ? '' : 'none';
    }
}

////////////////////////////////////////////////////////////////
// EVENT LISTENERS
////////////////////////////////////////////////////////////////

// Set up event listeners for changes in the building type selection (dropdown) and trigger the function showHideFieldOnBuildingType when a change occurs.
SELECT_BUILDING_TYPE.addEventListener('change', showHideFieldOnBuildingType);

////////////////////////////////////////////////////////////////
// INITIALIZATIONS
////////////////////////////////////////////////////////////////

// Call the function to hide all steps
hideSteps();

// Call the function to reset all values
resetValues();

// Set the default value of the building type to "---Select---"
document.getElementById('SELECT_BUILDING_TYPE').value = '---Select---'; 