import { Router } from 'express';
const router = Router();
import { sign, verify } from 'jsonwebtoken';
import passport from "../services/authentication/authentication";
const request = require('request')

console.log(passport)
export function login_authentication(req, res, next) {
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

export function register_final(req, res, next) {
  console.log(req);
  var json = {};
  json.finalUser = {
    gender: req.body.gender,
    birthdate: req.body.birthday
  }

  json.user = {
    email: req.body.email,
    password_digest: req.body.password,
    name: req.body.name,
    image_path: '/',
    id_document: req.body.id,
    phone: req.body.phone
  }
  console.log(json)
  request.post({ url: 'http://192.168.8.59:3000/user-api/final_users', headers: { 'content-type': 'application/json' }, body: JSON.stringify(json) }, (error, res2, body) => {
    if (error) {
      console.error(error)
      return
    }
    console.log(body);

    if (res2.statusCode == 201) {
      var user;
      user = {
        gender: req.body.gender.phone,
        birthdate: req.body.birthday,
        email: req.body.email,
        name: req.body.name,
        image_path: '/',
        id_document: req.body.id,
        phone: req.body.phone
      }
      const token = sign(user, 'secret');
      res.status(res2.statusCode).send(JSON.stringify({ token: token }));

    } else {
      res.status(res2.statusCode).send();
    }

  })

};

export function authentication(req, res, next) {
  console.log(req);

  const token = req.headers['authorization'];
  console.log(token);
  if (token) {
    // verifies secret and checks exp
    verify(token, 'secret', function (err, decoded) {
      if (err) {
        return res.status(401).json({ "error": true, "message": 'Unauthorized access.' });
      }
      req.decoded = decoded;
      next();
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