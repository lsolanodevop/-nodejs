const postman = require('postman-request');
const prompt = require("prompt-sync")();
const geocode = require("./utils/geocode")
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

// postman({url:url2,json:true}, (error,response ) =>
// {
// if(error)
// {
//     console.log("Unable to make the request")
// }else if(response.body.message)
// {
//     console.log(response.body.message);
// }else 
// {
//     console.log(response.body.features[0].center);
// }

// }); 
//encodeURIComponent funcion para poder buscar strings con caracteres especiales y que no explote el peo
const location = prompt("Tipe the city you're looking for ");

geocode(location,(error,data) => {
console.log("Error",error);
console.log("Data",data);
});