const requestPromise = require('request-promise');
import RequestHelper from '../helpers/request_helper';

const shoppingCartUrl = 'http://192.168.1.63:3001/carts';

class ShoppingCartApi {
  static async checkActualCart(req) {
    var userId = req.params.user_id;

    var options = {
      uri: shoppingCartUrl + `/user_actual_cart/${userId}`,
      json: true // Automatically parses the JSON string in the response
    };

    return requestPromise(options)
      .then(function(actualCart) {
        return actualCart;
      })
      .catch(function() {
        return false;
      });
  }

  static async checkCreateCart(req, res) {
    await ShoppingCartApi.checkActualCart(req)
      .then(function(actualCart) {
        if (!actualCart) {
          var userId = req.params.user_id;
          var items = req.body.cart.items;
          var actualState = req.body.cart.actual_state;
          
          var options = {
            method: 'POST',
            uri: shoppingCartUrl,
            body: {
              cart: {
                user_id: userId,
                items: items,
                actual_state: actualState
              }
            },
            json: true // Automatically stringifies the body to JSON
          };
          
          requestPromise.post(options)
            .then(function(createdCart) {
              return res.status(200).json(createdCart);
            })
            .catch(function(err) {
              return res.status(400).json({ "error": true, "message": err });
            });
        } else {
          return res.status(200).json(actualCart);
        }
      })
      .catch(function(err) {
        return res.status(400).json({ "error": true, "message": err }); 
      });
  }
}

export default ShoppingCartApi;