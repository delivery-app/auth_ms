
import { Router } from 'express';
import { login_authentication, authentication } from "../controllers/authentication";

const router = Router();

router.post('/login', login_authentication);
router.post('/user', authentication);

export default router;
