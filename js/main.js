let cards = document.getElementById('card');
let inputBox = document.getElementById('input');
let zipEntered = "";

function getZip() {
    let zip = inputBox.value; 
    zipEntered = zip;
}

let getAPI = async function getAPI() {
    let weatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${zipEntered},us&appid=4f0c02c4f644627986534c8f5b3c43d2`;
    let response = await axios.get(weatherLink);
    let data = response.data;
    let condition = data.weather[0].main;
    let otherInfo = data.weather[0].description;
    let temperature = data.main.temp;
    let cityName = data.name;
    setInnerText('city', cityName);
    setInnerText('temp', temperature);
    setInnerText('condition', condition);
    setInnerText('other', otherInfo);
    show(cards);
    console.log(condition)
}


function hide(variable) {
    variable.hidden = true;
}

function show(variable) {
    variable.hidden = false;
    weatherDisplay;
}


function init() {
    hide(cards);
}

function validZip() {
    
}


function weatherDisplay() {
    let button = document.getElementById('button');
    button.addEventListener('click', getAPI);
    
}

weatherDisplay();





//myFunction();
/*
.catch(err => {
    console.log(err.message);
})
*/


function setInnerText(elementID, text) {
    const element = document.getElementById(elementID)
    element.innerText = text;
}







