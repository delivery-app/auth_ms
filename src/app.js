'use strict';

import  express  from 'express';
import { createServer } from 'http';
import { login_authentication, authentication, register_final } from "./controllers/authentication"
import { user } from "./controllers/authentication"
var bodyParser = require('body-parser');
var passport = require('./services/authentication/authentication');


const app = express()
const server = createServer(app)
const PORT = process.env.PORT || 8000
var router = express.Router();
app.use(bodyParser.json());

; server.listen(PORT, '192.168.8.59', () => console.log(`server running in http://localhost:${PORT}`))


app.post('/login', login_authentication);
app.post('/user', authentication);
app.post('/final_register', register_final);