import { Router } from 'express';
const loginRouter = Router();

loginRouter.get('/', (req, res, err) => {
    res.render('login');
})

export default loginRouter;