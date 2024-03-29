import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
const request2 = require('request')

passport.use(
  new LocalStrategy(function (username, password, cb) {
    var json = {
      email: username,
      password_digest: password
    };
    request2.post({ url: 'http://192.168.1.63:3002/user-api/users/check_user', headers: { 'content-type': 'application/json' }, body: JSON.stringify(json) }, (error, res2, body) => {
      if (error) {
        console.error(error)
        return
      }
      body = JSON.parse(body)
      if (body.status == "success") {
        var response_json = {
          id: body.data.id,
          email: body.data.email,
          name: body.data.name
        }
        return cb(null, response_json, { message: "Logged In Successfully" });
      }else{
        return cb(null, '', { message: "Error" });
      }
    })
  })
);

module.exports = passport



