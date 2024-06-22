"use strict";
////////////////////////////////////////////////////////////////
// VARIABLES
////////////////////////////////////////////////////////////////

// Set the DOM elements variables for divisions of steps 1 to 4
const DIV_STEP_1 = ;
const DIV_STEP_2 = ;
const DIV_STEP_3 = ;
const DIV_STEP_4 = ;

// Set the DOM element variable for building type dropdown of step 1
const SELECT_BUILDING_TYPE = '';

// Set the DOM element variable for the group of divisions of step 2 inputs
const DIV_NUMBER_OF_APARTMENT = ;
const DIV_MAXIMUM_OCCUPANCY = ;
const DIV_NUMBER_OF_FLOORS = ;
const DIV_NUMBER_OF_ELEVATORS = ;
const DIV_AMOUNT_ELEVATORS_NEEDED = ;

// Set the DOM element variable for inputs of step 2
const INPUT_NUMBER_OF_APARTMENT = ;
const INPUT_NUMBER_OF_FLOORS = ;
const INPUT_MAXIMUM_OCCUPANCY = ;
const INPUT_NUMBER_OF_ELEVATORS = ;
const INPUT_AMOUNT_ELEVATORS_NEEDED = ;

// Set the DOM element variable for group of radio buttons of step 3
const RADIO_BUTTONS_PRODUCT_LINE = ;

// Set the DOM element variable for radio buttons of step 3
const RADIO_BUTTON_STANDARD = ;
const RADIO_BUTTON_PREMIUM = ;
const RADIO_BUTTON_EXCELIUM = ;

// Set the DOM element variable for read-only inputs of step 4
const INPUT_ELEVATOR_UNIT_PRICE = ;
const INPUT_ELEVATOR_TOTAL_PRICE = ;
const INPUT_INSTALLATION_FEES = ;
const INPUT_TOTAL_COST = ;

// Set the object variable for elevator UNIT_PRICES
const UNIT_PRICES = { 

};

// Set the object variable for elevator INSTALLATION_PERCENT_FEES
const INSTALLATION_PERCENT_FEES = { 

};

////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////

// Function to hides steps 2 to 4 of the quote form
function hideSteps() {
    
}

// Function to shows steps 2 to 4 of the quote form
function showSteps() {
    
}

// Function to resets all values and radio buttons
function resetValues() {
    // Input values
    
    // Radio buttons
    
}

// Function to shows/hides fields depending on the building type
function showHideFieldOnBuildingType() {
    // Call the hide steps function

    // Call the reset values function

    
    if (SELECT_BUILDING_TYPE.value !== '---Select---') {
        // Call the show steps function


        // Set variables depending on the building type
        const displayResidential = SELECT_BUILDING_TYPE.value === "";
        const displayCommercial = SELECT_BUILDING_TYPE.value === "";
        const displayIndustrial = SELECT_BUILDING_TYPE.value === "";

        // Display fields depending on the building type
        DIV_NUMBER_OF_APARTMENT.style.display = displayResidential ? '' : '';
        DIV_NUMBER_OF_FLOORS.style.display = displayCommercial || displayResidential ? '' : '';
        DIV_MAXIMUM_OCCUPANCY.style.display = displayCommercial ? '' : '';
        DIV_NUMBER_OF_ELEVATORS.style.display = displayIndustrial ? '' : '';
    }
}

////////////////////////////////////////////////////////////////
// EVENT LISTENERS
////////////////////////////////////////////////////////////////

// Set up event listeners for changes in the building type selection (dropdown) and trigger the function showHideFieldOnBuildingType when a change occurs.
SELECT_BUILDING_TYPE.addEventListener('', showHideFieldOnBuildingType);

////////////////////////////////////////////////////////////////
// INITIALIZATIONS
////////////////////////////////////////////////////////////////

// Call the function to hide all steps


// Call the function to reset all values


// Set the default value of the building type to "---Select---"
