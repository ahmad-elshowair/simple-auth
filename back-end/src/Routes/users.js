import { Router } from "express";
import users from "../Controllers/users.js";
import { validation } from '../middleware/validInfo.js'
import { authorization } from '../middleware/authorization.js'

const router = Router();

router.get('/', authorization, users.getUsers);
router.get('/get-user/:user_id', authorization, users.getAUser);
router.post('/register', validation, users.register);
router.post('/login', validation, users.login);
router.delete('/delete/:user_id', users.remove);

export default router;