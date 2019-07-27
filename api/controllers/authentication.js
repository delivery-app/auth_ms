import { sign, verify } from 'jsonwebtoken';
import passport from "../services/authentication";
import { runInNewContext } from 'vm';

export function login_authentication(req, res) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: 'Something is not right',
        user: user
      });
    }
    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }
      const token = sign(user, 'secret');
      return res.json({ user, token });
    });
  })(req, res);
};

export async function authentication(req, res) {
  var bearToken = req.headers['authorization']
  var token = bearToken.split(" ")[1] ? bearToken.split(" ")[1] : bearToken; 

  console.log(token);
  if (token) {
    // verifies secret and checks exp
    verify(token, 'secret', function (err, decoded) {
      if (err) {
        return res.status(401).json({ "error": true, "message": 'Unauthorized access.' });
      }
      req.decoded = decoded;
      return decoded;
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
      "error": true,
      "message": 'No token provided.'
    });
  }
}