import { Router } from 'express';
import ShoppingCartApi from '../services/shopping_cart_api';

const router = Router();

router.get('/user_actual_cart/:user_id', ShoppingCartApi.checkActualCart);
router.post('/user_actual_cart/:user_id', ShoppingCartApi.checkCreateCart);

export default router;