import { Router } from 'express';
const registerRouter = Router();
import { postUser } from '../controllers/registerController.mjs';

registerRouter.get('/', (req, res) => {
    res.render('register');
})

registerRouter.post("/", postUser);

export default registerRouter;