const Router = require('express').Router;
const controller = require('../controllers/weatherController');
const controllerLocation = require('../controllers/locationController');
const router = Router();


router.get('/location', controllerLocation.getLocationByIp);

router.get('/current/:city?', controller.getCurrentWeather);

router.get('/forecast/:city?', controller.getForecast);


module.exports = router;