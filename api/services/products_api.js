import RequestHelper from '../helpers/request_helper';
const productsUrl = 'http://192.168.1.63:3001/products';

class ProductsApi {
  static async getAllProducts(req, res) {
    var options = {
      uri: productsUrl,
      json: true // Automatically parses the JSON string in the response
   };
   
  return RequestHelper.restRequest(options, res);
  }
}

export default ProductsApi;