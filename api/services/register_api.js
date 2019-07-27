import { sign } from 'jsonwebtoken';
const request = require('request');

const registerUrl = 'http://192.168.0.12:3000/user-api/';

class RegisterApi {
  static finalUserJson(bodyData) {
    var finUserjson = {};
    finUserjson.finalUser = {
      gender: bodyData.gender,
      birthdate: bodyData.birthday
    }
  
    finUserjson.user = {
      email: bodyData.email,
      password_digest: bodyData.password,
      name: bodyData.name,
      image_path: '/',
      id_document: bodyData.id_document,
      phone: bodyData.phone
    }

    return finUserjson;
  }

  static registerFinalUser(req, res) {
    var finUserjson = RegisterApi.finalUserJson(req.body);

    request.post({ url: registerUrl + 'final_users', headers: { 'content-type': 'application/json' }, 
                body: JSON.stringify(finUserjson) }, (error, res2) => {
      if (error) {
        console.error(error)
        return
      }
  
      if (res2.statusCode == 201) {
        const token = sign(finUserjson.user, 'secret');
        console.log('Final user created via auth entry point');
        res.status(res2.statusCode).send(JSON.stringify({ token: token }));
  
      } else {
        res.status(res2.statusCode).send();
      }
    })
  };

}

export default RegisterApi;
