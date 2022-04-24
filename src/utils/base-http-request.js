
const axios = require('axios');

class BaseHttpService {

  async get(baseUrl,endpoint, options = {}) {
    return await axios.get(`${baseUrl}/${endpoint}`, {params:options})
      .then(response => response)
      .catch(error => error);
  }
}

module.exports = BaseHttpService;