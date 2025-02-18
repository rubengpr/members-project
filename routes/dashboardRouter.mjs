import { Router } from 'express';
const dashboardRouter = Router();

dashboardRouter.get('/', (req, res) => {
    res.render('dashboard', { user: req.user });
});

export default dashboardRouter;