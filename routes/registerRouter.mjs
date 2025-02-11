import { Router } from 'express';
const registerRouter = Router();
import { postUser } from '../controllers/registerController.mjs';

registerRouter.get('/', (req, res) => {
    res.render('register');
    console.log(req.body.username)
})

registerRouter.post("/", postUser);

export default registerRouter;