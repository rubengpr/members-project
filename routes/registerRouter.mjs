import { Router } from 'express';
const registerRouter = Router();
import { postUser } from '../controllers/registerController.mjs';
import { body } from 'express-validator';

registerRouter.get('/', (req, res) => {
    res.render('register');
})

registerRouter.post("/",
    [
    body('username')
        .isLength({min:5}).withMessage('Username length should have 5 or more characters')
        .isAlphanumeric().withMessage('Username should only contain letters and numbers'),
    body('password').isLength({min:6}).withMessage('Password must have at least 5 characters'),
    ],
    postUser);

export default registerRouter;