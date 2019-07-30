const requestPromise = require('request-promise');

class RequestHelper {
  static async restRequest(options, res) {
    return requestPromise(options)
      .then(function (response) {
        return res.status(200).json(response);    
      })
      .catch(function (err) {
        return res.status(400).json({ "error": true, "message": err });
      });
  }
}

export default RequestHelper;