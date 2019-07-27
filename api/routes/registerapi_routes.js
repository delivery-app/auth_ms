import { Router } from 'express';
import RegisterApi from '../services/register_api';

const router = Router();

router.post('/finalusr_register', RegisterApi.registerFinalUser);

export default router;