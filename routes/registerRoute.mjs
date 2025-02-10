import { Router } from 'express';
const registerRouter = Router();

registerRouter.get('/', (req, res, err) => {
    res.render('register');
})

export default registerRouter;