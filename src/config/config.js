module.exports = {

     openWeatherApiKey : process.env.API_KEY,
     weatherUnitsApi : process.env.UNITS || 'metric', //units of measurement <metric> celcius, <imperial> fahrenheit, default kelvins
     languageApi : process.env.LANG ||'es', //description language
     baseUrlIpApi : process.env.URL_API_IP || 'http://ip-api.com/json/',
     baseUrlApiOpenWeather : process.env.URL_API_WEATHER || 'https://api.openweathermap.org/data/2.5',
}