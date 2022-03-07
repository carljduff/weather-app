// Model
class Weather {
    constructor() {
        this.city = "";
        this.temperature = 0;
        this.currentCondition = "";
        this.currentIcon = "";
    }

    setWeather(x) {
        this.city = x.city;
        this.temperature = x.temperature;
        this.currentCondition = x.currentCondition;
        this.currentIcon = x.currentIcon;
    }

    setCity(x) {
        this.city = x;
    }
    getCity() {
        return this.city;
    }
    setTemperature(x) {
        this.temperature = x;
    }
    getTemperature() {
        return this.temperature
    }
    setCurrentCondition(x) {
        this.currentCondition = x;
    }
    getCurrentCondition() {
        return this.currentCondition;
    }
    setCurrentIcon(x) {
        this.currentIcon = x;
    }
    getCurrentIcon() {
        return this.currentIcon
    }
}

// Controller
class WeatherController {
    constructor(model, view) {
        this.m = model;
        this.v = view;
        this.v.bindInputChange(this.handleZipInputChange.bind(this));
        
    }



    // onApiCall = (data) => {
    //     this.v.displayWeather(data);
    // }
    


   async getWeatherByZipcode(zip) {
        try {
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=4f0c02c4f644627986534c8f5b3c43d2`)
            if(response.data) {
                return response.data;
            }
        } catch (error) {
            console.log(error);
        }
    }

    async handleZipInputChange(e) {
        const value = e.target.value;
        const validZip = this.validateZipCode(value);
        if(validZip) {
          let data = await this.getWeatherByZipcode(value);
          console.log(data);

          this.m.setWeather({
              temperature: data.main.temp,
              city: data.name,
              currentCondition: data.weather[0].main
          })

          
        }
    }

    validateZipCode(value) {
        if (!isNaN(value) && value.length === 5) {
            return true;
        }
            return false;
    }
} 

class WeatherView {
    constructor() {
        this.cityDiv = document.getElementById('city');
        this.tempDiv = document.getElementById('kelvin');
        this.currentConditionDiv = document.getElementById('condition');
        this.currentIconDiv = document.getElementById('other-icon');
        this.input = document.getElementById('input');
       
        
    }

    bindInputChange(fn) {
        this.input.addEventListener('change', fn)
    }

    // createElement(tag, className) {
    //     const element = document.createElement(tag)
    //     if (className) element.classList.add(className)
    //     return element
    // }
    
      // Retrieve an element from the DOM
    // getElement(selector) {
    //     return document.querySelector(selector)
    // }

    // get _zipCodeText() {
    //     return this.input.value;
    // }

    _resetInput() {
        this.input.value = '';
    }

    displayWeather(model) {
        this.cityDiv.innerText = model.getCity();
        this.tempDiv.innerText = model.getTemperature();
        this.currentConditionDiv.innerText = model.getCurrentCondition();
        // this.currentIconDiv.innerText = weatherData.currentIcon;
       
    }

    hideWeather() {

    }

}

// const app = new WeatherController(new Weather(), new WeatherView());
