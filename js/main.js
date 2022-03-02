const weather = axios.get('https://api.openweathermap.org/data/2.5/weather?zip=40515,us&appid=4f0c02c4f644627986534c8f5b3c43d2')
.then((resp) => {
   return resp.data;
})
.catch((err) => {
    console.log(err);
})
.then((data) => {
    console.log(data.weather[0])
})


