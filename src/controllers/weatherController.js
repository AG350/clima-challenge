const service = require('../services/service');

module.exports = {
    getCurrentWeather: async (req, res) =>{
        let cityName = req.params.city;
        if(!cityName){
            let ip = req.header('x-forwarded-for') || req.socket.remoteAddress;
            let cityIp = await service.getLocationService(ip);
            cityName = cityIp.city
        }
        try {
            let response = await service.getWeatherInfo('weather', cityName);
           
            if (response.name == 'Error') {
                throw new Error(response.message)
            } else {
                let city = {
                    city: response.name,
                    country : response.sys.country,
                    coord : response.coord
                }
                res.status(200).json({
                    city,
                    weather: response.weather,
                    temp: response.main
                });
            }
            
        } catch (e) {
           res.status(404).send({error: e.message})
        }
    },
    getForecast : async (req, res) => {
        let cityName = req.params.city;
        if(!cityName){
            let ip = req.header('x-forwarded-for') || req.socket.remoteAddress;
            let cityIp = await service.getLocationService(ip);
            cityName = cityIp.city
        }
        try {
            let forecast = await service.getWeatherInfo('forecast', cityName);
            if (forecast.name == 'Error') {
                throw new Error(forecast.message)
            } else {
                res.status(200).json({
                    city: cityName,
                    forecast
                });
            }
            
        } catch (e) {
           res.status(404).send({error: e.message})
        }
    
    }

}