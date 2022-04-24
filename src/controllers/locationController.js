const service = require('../services/service');

module.exports = {
    getLocationByIp : async (req, res) => {
        let ip = req.header('X-Forwarded-For') || req.socket.remoteAddress;
        console.log('location ip : '+ip)
        try {
            city = await service.getLocationService(ip);
            if(city.status === 'fail') {
                throw new Error('location not found')
            }
            return res.json(city);
    
        } catch (e) {
           res.status(404).send({message: e.message})
        }
    }
}