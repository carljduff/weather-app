let cards = document.getElementById('card');
let inputBox = document.getElementById('input');
let pError = document.getElementById('error');
let storage = document.getElementById('store').innerText;
let button = document.getElementById('button');
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})
let zipEntered = "";
inputBox.onblur = getZip;
inputBox.onfocus = init;
let zips = [];

// function storeZips() {
//     let value = inputBox.value;
//     console.log(zips);
//     if (zips.includes(value)) {
//         show(pError)
//         setInnerText('error', "Please choose a zipcode that has not been chosen.")
//         hide(cards);
//     } else {
//         zips.push(value);
//     }
// }

// function getZip() {
//     let zip = inputBox.value; 
//     zipEntered = zip;
// }

// function setInnerText(elementID, text) {
//     const element = document.getElementById(elementID)
//     element.innerText = text;
// }

// let store = {
//     condition: [],
//     otherInfo: [],
//     icon: [],
//     iconLink: [],
//     kelvin: [],
//     cityName: []
// }

// async function getAPI() {
//     let weatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${zipEntered},us&appid=4f0c02c4f644627986534c8f5b3c43d2`;
//     let request = await axios.get(weatherLink);
//     let data = request.data;
//     return data;
// }

async function setState() { 
    try {
        if (isNaN(inputBox.value) === true || inputBox.length < 5) {
                    setInnerText('error', "Please enter a valid Zipcode.");
                    show(pError);
    } else {
    data = await getAPI();
    store.condition = data.weather[0].main;
    store.otherInfo = data.weather[0].icon;
    store.kelvin = data.main.temp;
    store.cityName = data.name;
    updateState();
    }
} catch (e) {
        myModal.show();
    }
}

function updateState() {
    if (storage == "Please choose a zipcode that has not been chosen") {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80')";
    } else {
    let celsius = (data.main.temp - 273.15)
    let fahrenheit = 1.8 * (data.main.temp - 273) + 32;
    setInnerText('city', store.cityName);
    setInnerText('kelvin', Math.round(store.kelvin));
    setInnerText('fahrenheit', Math.round(fahrenheit));
    setInnerText('celsius', Math.round(celsius));
    setInnerText('condition', store.condition);
    show(cards);
    hide(pError);
    storeZips();
    myModal.hide();
    let icon = document.getElementById("image");
    let image = document.getElementById('other-body').appendChild(icon);
    let iconLink = `https://openweathermap.org/img/wn/${store.otherInfo}.png`;
    image.src = iconLink;
    changeBG();
}
}

function changeBG() {
    if(condition.innerText == 'Clouds') {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')";
    } 
    if(condition.innerText == 'Rain') {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1520609798519-2e1e8c18df3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')";
     }
     if(condition.innerText == 'Clear') {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1590077428593-a55bb07c4665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1714&q=80')";
     }
     if(condition.innerText == 'Snow') {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1521903146409-7165ad695b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1753&q=80')";
     }
     if(condition.innerText == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1585074245728-eedb0cc44a66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2464&q=80')";
     }
}


button.onclick = setState;


function hide(variable) {
    variable.hidden = true;
}

function show(variable) {
    variable.hidden = false;
}

function init() {
    hide(cards);
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80')";

}
