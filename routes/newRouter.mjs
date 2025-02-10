import { Router } from 'express';
const newRouter = Router();

newRouter.get('/', (req, res) => {
    res.render('new');
});

newRouter.post('/', (req, res) => {
    res.redirect('/');
});

export default newRouter;