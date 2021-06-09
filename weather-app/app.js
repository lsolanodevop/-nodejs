const postman = require('postman-request');
const key = "9747e2502dfcc4d13aa8de971a181e18";
const url = "http://api.weatherstack.com/current?access_key=9747e2502dfcc4d13aa8de971a181e18&query=Montevideo";

postman({url:url}, (error, response) => 
{
const data = JSON.parse(response.body);
console.log(data.current);
});