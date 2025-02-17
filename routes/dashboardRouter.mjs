import { Router } from 'express';
const dashboardRouter = Router();

dashboardRouter.get('/', (req, res) => {
    console.log(req.user)
    res.render('dashboard', { user: req.user });
});

export default dashboardRouter;