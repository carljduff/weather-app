## Display

1. Top Section 
* Weather App Title
* Input Box for Zipcode
* Button to submit what's in the input box.

2. Bottom Section
* When the API is called:
* Display City
* Display Temperature in K, F, and C.
* Display Condition
* Display Other Info 

3. Module to display error catch to pop up.

## Objects
1. Weather
* State will change when the zip code is entered.
* If information is received correctly then bottom section will display with results.
* If an error is found, a module will appear to let the user know there's an error.
* Zip code will be saved in an array/object so API calls are not wasted.

## Procedures
1. When the page is first loaded, the top section will appear.
2. Make sure user input is valid for zipcode. 
3. Make a function for the button when clicked to call API.
4. If data is received, get data from API and display bottom section after it's been loaded:
* Display information from API
* City 
* Temperature to K|F|C (Create functions to get different temps if they're all not given.)
* Condition 
* Other info to display image/etc
5. If there's an error, display an Error message in the module.
6. Store Data from API into an object.
7. When the new zip code is entered, it must be checked to see if it's been entered before.
8. The bottom section must hide again when the input box is focused. 

## Functions

FUNCTION init(): function so the top section will appear on the body load.
* function init() {
    DISPLAY top section.
    HIDE bottom section.
}

FUNCTION validZip(): function to ensure the zipcode entry is a valid 5 digit number.
* function validZip() {
    GET input.value and conditionals to check if the zip is valid.

}

FUNCTION getAPI(): function so that during a click event, the API is called and data is returned.
* function getAPI() {
    USE axios.get to get API call 
}

FUNCTION displayBottom(): function so when the data is received, put the data in the bottom section.
* function displayBottom() {
    SET the innerTEXT to .city, .temp, .condition, or for other info.
}

FUNCTION storeZip(): store the zipcode that's entered and insert it into its storage. (Not for sure if I need this as a function or not yet.)



