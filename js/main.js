
/*
const weather = axios.get('https://api.openweathermap.org/data/2.5/weather?zip=40515,us&appid=4f0c02c4f644627986534c8f5b3c43d2')
.then((resp) => {
   return resp.data;
})
.catch((err) => {
    console.log(err);
})
.then((data) => {
    console.log(data.weather[0])
    //setInnerText('temp', data.main);
})
*/
const weatherLink = 'https://api.openweathermap.org/data/2.5/weather?zip=40515,us&appid=4f0c02c4f644627986534c8f5b3c43d2';
let cards = document.getElementById('card');
let inputBox = document.getElementById('input');
let zipEntered = null;


let getAPI = async function getAPI() {
        let response = await axios.get(weatherLink);
        let data = response.data;
        let condition = data.weather[0].main;
        let otherInfo = data.weather[0].description;
        let temperature = data.main.temp;
        let cityName = data.name;
        console.log(condition)
}


function hide(variable) {
    variable.hidden = true;
}

function show(variable) {
    variable.hidden = false;
    //getAPI();
}


function init() {
    hide(cards);
}

function validZip() {
    
}

function getZip() {
    
    let zipEntered = inputBox.value; 
    console.log(zipEntered);
}

function weatherDisplay() {
    let button = document.getElementById('button');
    button.addEventListener('click', getAPI);
}





//hide(cards);


//myFunction();
/*
.catch(err => {
    console.log(err.message);
})
*/

/*
function setInnerText(elementID, text) {
    const element = document.getElementById(elementID)
    element.innerText = text;
}
*/
/*
let todosLink = 'https://jsonplaceholder.typicode.com/todos';
let imagesLink = 'https://jsonplaceholder.typicode.com/images';
*/





