const requestPromise = require('request-promise');

const productsUrl = 'http://192.168.0.12:3001/products';

class ProductsApi {
  static async getAllProducts(req, res) {
    var options = {
      uri: productsUrl,
      json: true // Automatically parses the JSON string in the response
  };
  
  requestPromise(options)
    .then(function (products) {
      return res.status(200).json(products);    
    })
    .catch(function (err) {
      return res.status(401).json({ "error": true, "message": err });
    });
  }
}

export default ProductsApi;