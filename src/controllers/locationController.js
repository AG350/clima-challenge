const service = require('../services/service');

module.exports = {
    getLocationByIp : async (req, res) => {
        let ip = req.header('x-forwarded-for') || req.socket.remoteAddress;
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