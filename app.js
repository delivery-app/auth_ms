import  express  from 'express';
import { createServer } from 'http';
var bodyParser = require('body-parser');

import AuthenticationRoutes from "./api/routes/authentication_routes";
import RegisterApiRoutes from "./api/routes/registerapi_routes";
import ProductsApiRoutes from "./api/routes/productapi_routes";
import RestaurantsApiRoutes from "./api/routes/restaurants_routes";

const app = express()
const server = createServer(app)
const PORT = process.env.PORT || 8000;
var router = express.Router();
app.use(bodyParser.json());

server.listen(PORT, '192.168.0.12', () => console.log(`server running in http://localhost:${PORT}`));

// routing
app.use('/auth', AuthenticationRoutes);
app.use('/register', RegisterApiRoutes);
app.use('/products', ProductsApiRoutes);
app.use('/restaurants', RestaurantsApiRoutes);
