let cards = document.getElementById('card');
let inputBox = document.getElementById('input');
let pError = document.getElementById('error');
let button = document.getElementById('button');
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
  })
let zipEntered = "";
//let myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
inputBox.onblur = getZip;
inputBox.onfocus = init;
let zips = [];

function storeZips() {
    let value = inputBox.value;
    zips.push(value);
    console.log(zips);
    for (let i = 0; i < zips.length; i++) {
        if (value === zips[i]) {
            //show(pError);
            setInnerText('error', "Please choose a zipcode that hasn't been chosen.");
        }
    }
}


function setInnerText(elementID, text) {
    const element = document.getElementById(elementID)
    element.innerText = text;
}

function getZip() {
    let zip = inputBox.value; 
    zipEntered = zip;
}

async function getAPI() {
    try {
    if (isNaN(inputBox.value) === true || inputBox.length < 5) {
        setInnerText('error', "Please enter a valid Zipcode.");
        show(pError);
    } else {
        let weatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${zipEntered},us&appid=4f0c02c4f644627986534c8f5b3c43d2`;
        let response = await axios.get(weatherLink);
        let data = response.data;
        let condition = data.weather[0].main;
        let otherInfo = data.weather[0].icon;
        //let iconLink = `https://openweathermap.org/img/wn/${otherInfo}.png`;
        let icon = document.getElementById("image");
        let iconLink = `https://openweathermap.org/img/wn/${otherInfo}.png`;
        let kelvin = data.main.temp;
        let cityName = data.name;
        let celsius = (kelvin - 273.15)
        let fahrenheit = 1.8 * (kelvin - 273) + 32;
        setInnerText('city', cityName);
        setInnerText('kelvin', Math.round(kelvin));
        setInnerText('fahrenheit', Math.round(fahrenheit));
        setInnerText('celsius', Math.round(celsius));
        setInnerText('condition', condition);
        //setInnerText('other-body', iconLink);
        let image = document.getElementById('other-body').appendChild(icon);
        image.src = iconLink;
        show(cards);
        hide(pError);
        storeZips();
        myModal.hide();
    }
} catch (e) {
    myModal.show();
    console.log(e);
}
}


button.onclick = getAPI;

function hide(variable) {
    variable.hidden = true;
}

function show(variable) {
    variable.hidden = false;
}


function init() {
    hide(cards);
}












