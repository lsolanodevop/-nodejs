const postman = require("postman-request");

const forecast = (longitude, latitude,callback) =>
{
    const url = "http://api.weatherstack.com/current?access_key=9747e2502dfcc4d13aa8de971a181e18&query="+encodeURIComponent(latitude)+","+encodeURIComponent(longitude)+"";
    postman({url:url,json:true}, (error,response) =>
    {
        if(error)
        {
            callback("Unable to send the request",undefined);
        }else if(response.body.success === false)
        {
            callback("The coordinates are not valid",undefined);
        }else
        {
            callback(undefined,
                {
                    name: response.body.location.name,
                    country: response.body.location.country,
                    latitude: response.body.location.lat,
                    longitude: response.body.location.lon,
                    time: response.body.current.observation_time,
                    temperature: response.body.current.temprature,
                    feels: response.body.current.feelslike
                });
        }
    });
}
module.exports = forecast;