
const axios = require('axios');
const config = require('../config/config')
const baseHttpService = require('../utils/base-http-request');

const baseHTTP = new baseHttpService;

const baseUrlWeatherApi = config.baseUrlApiOpenWeather;
const baseUrlIpApi = config.baseUrlIpApi;
const appid = config.openWeatherApiKey;
const units = config.weatherUnitsApi
const lang = config.languageApi

const getLocationService = async (ip) => {
    const response = await baseHTTP.get(baseUrlIpApi,ip);
    return response.data;
}

const getWeatherInfo = async (endpoint, city) => {
    let q = city;
    try {
        const response = await baseHTTP.get(baseUrlWeatherApi,endpoint,{q,appid,units,lang});
        if (response.status != 200) {
            throw new Error('City not found')
        }
        
        return response.data;
    } catch (error) {
        return error;
    }
}


module.exports = {
    getLocationService,
    getWeatherInfo
}