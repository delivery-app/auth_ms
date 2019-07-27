import { Router } from 'express';
import RestaurantsApi from '../services/restaurants_api';

const router = Router();

router.get('/', RestaurantsApi.getAllRestaurants);
router.get('/:id/products', RestaurantsApi.getRestaurantProducts);

export default router;