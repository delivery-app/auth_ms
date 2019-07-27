import { Router } from 'express';
import ProductsApi from '../services/products_api';

const router = Router();

router.get('/', ProductsApi.getAllProducts);

export default router;