const postman = require("postman-request");

const geocode = (address,callback) => 
{
   const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=pk.eyJ1IjoibHNvbGFubyIsImEiOiJja3EwNzR3d2UwMjF3Mm9wNGV3dnk0OTdhIn0.omsNVLBXj38YqsZn8RU21g&limit=1";
    // console.log(url);
    postman({url:url,json:true}, (error , response) =>
    {
        if(error)
        {
            callback("Unable to send the request", undefined);
        }else if(response.body.features.length === 0)
        {
            callback("Unable to find location. Try another search",undefined);
        }else 
        {
            callback(undefined,
                {
                    latitude: response.body.features[0].center[1],
                    longitude: response.body.features[0].center[0],
                    location: response.body.features[0].place_name
                });
        }
    });
}

module.exports = geocode;