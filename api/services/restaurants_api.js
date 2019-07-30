import RequestHelper from '../helpers/request_helper';

const restaurantsUrl = 'http://192.168.1.63:3001/restaurants';

class RestaurantsApi {
  static async getAllRestaurants(req, res) {
    var options = {
      uri: restaurantsUrl,
      json: true // Automatically parses the JSON string in the response
    };
  
    return RequestHelper.restRequest(options, res);
  }

  static async getRestaurantProducts(req, res) {
    var restaurantId = req.params.id;
    var options = {
      uri: restaurantsUrl + `/${restaurantId}/products`,
      json: true // Automatically parses the JSON string in the response
    };
  
    return RequestHelper.restRequest(options, res);
  }
}

export default RestaurantsApi;