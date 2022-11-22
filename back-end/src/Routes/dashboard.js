import { Router } from 'express';
import dashboard from '../Controllers/dashboard.js';
import { authorization } from '../middleware/authorization.js'

const router = Router();

router.get('/', authorization, dashboard.dashboard);

export default router;