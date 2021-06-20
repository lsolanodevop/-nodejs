const postman = require('postman-request');
const prompt = require("prompt-sync")();
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
const key = "9747e2502dfcc4d13aa8de971a181e18";
const key2 = "pk.eyJ1IjoibHNvbGFubyIsImEiOiJja3EwNzR3d2UwMjF3Mm9wNGV3dnk0OTdhIn0.omsNVLBXj38YqsZn8RU21g";
const url = "http://api.weatherstack.com/current?access_key=9747e2502dfcc4d13aa8de971a181e18&query=Montevideo";
const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Caricuao.json?access_token=pk.eyJ1IjoibHNvbGFubyIsImEiOiJja3EwNzR3d2UwMjF3Mm9wNGV3dnk0OTdhIn0.omsNVLBXj38YqsZn8RU21g&limit=1";
// postman({url:url, json:true}, (error, response) => 
// {
//     if(error)
//     {
//         console.log("Unable to send the request");
//     }else if(response.body.error)
//     {
//         console.log(response.body.error.info);
//     }
//     else
//     {
//         console.log(response.body.current);
//         console.log("The temperature is: " +response.body.current.temperature + " but it feels like: " + response.body.current.feelslike);
//     }
// });
//encodeURIComponent funcion para poder buscar strings con caracteres especiales y que no explote el peo
const location = prompt("Tipe the city you're looking for ");
var coordinates = [];
geocode(location,(error,data) => {
console.log("Error",error);
console.log("Data",data);
coordinates = [data.longitude,data.latitude];
forecast(coordinates[0],coordinates[1],(error,data) =>
{
    console.log('Error', error)
    console.log('Data', data)
});
});
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })